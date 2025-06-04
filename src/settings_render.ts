import { DEFAULT_CTX_SIZES, MODULE_NAME, TEXT_LIST_SEP } from "./consts";
import { generateOption } from "./elements";
import { refreshModelState, waitForModelStatus } from './model_state';
import { loadAvailableModels, loadModelStatus, startModel, stopModel } from "./requests";
import editorHTML from './run_template.html';
import { emptyRunTemplate, getSettings, RunTemplate, saveExtensionSettings } from "./settings";
import html from './settings.html';

const { Popup, POPUP_TYPE } = SillyTavern.getContext();

// eslint-disable-next-line max-statements,max-lines-per-function
const showRunTemplateEditPopup = async (tmpl: RunTemplate) => {
    const popup = new Popup(
        editorHTML,
        POPUP_TYPE.TEXT,
        '',
        {
            okButton: 'Save',
            cancelButton: 'Cancel',
            wide: true,
            large: true,
        })

    const popupShow = popup.show()

    const elements = {
        modelSelect: document.getElementById('model') as HTMLSelectElement,
        contextSize: document.getElementById('context-size') as HTMLInputElement,
        contextSizeSlider: document.getElementById('context-size-slider') as HTMLInputElement,
        contextSizeMarkers: document.getElementById('context-size-markers') as HTMLDataListElement,
        gpuLayers: document.getElementById('gpu-layers') as HTMLInputElement,
        threads: document.getElementById('threads') as HTMLInputElement,
        tensorSplit: document.getElementById('tensor-split') as HTMLInputElement,
    }

    const tmplData = tmpl === undefined ? { ...emptyRunTemplate } : { ...tmpl }

    const existingModels = await loadAvailableModels()
    existingModels
        .forEach(model => {
            elements
                .modelSelect
                .appendChild(generateOption(model, { selected: model === tmplData.model }))
        })

    elements.modelSelect.value = tmplData.model ?? ''
    elements.modelSelect.onchange = () => { tmplData.model = elements.modelSelect.value }

    elements.contextSize.value = tmplData.contextSize?.toString() ?? ''
    elements.contextSize.onchange = () => {
        tmplData.contextSize = parseInt(elements.contextSize.value, 10)

        if (elements.contextSizeSlider.value !== elements.contextSize.value) {
            elements.contextSizeSlider.value = elements.contextSize.value
        }
    }

    DEFAULT_CTX_SIZES.forEach(val => {
        elements.contextSizeMarkers.appendChild(generateOption(val.toString()))
    })

    elements.contextSizeSlider.value = elements.contextSize.value
    elements.contextSizeSlider.onchange = () => {
        tmplData.contextSize = parseInt(elements.contextSizeSlider.value, 10)

        if (elements.contextSizeSlider.value !== elements.contextSize.value) {
            elements.contextSize.value = elements.contextSizeSlider.value
        }
    }

    elements.gpuLayers.value = tmplData.gpuLayers?.toString() ?? ''
    elements.gpuLayers.onchange = () => { tmplData.gpuLayers = parseInt(elements.gpuLayers.value, 10) }

    elements.threads.value = tmplData.threads?.toString() ?? ''
    elements.threads.onchange = () => { tmplData.threads = parseInt(elements.threads.value, 10) }

    elements.tensorSplit.value = tmplData.tensorSplit?.join(TEXT_LIST_SEP) ?? ''
    elements.tensorSplit.onchange = () => {
        tmplData.tensorSplit = elements.tensorSplit.value.split(TEXT_LIST_SEP).map(str => parseInt(str, 10))
    }


    return await popupShow
        .then(result => {
            if (result) {
                return tmplData
            }

            // If NOK, return unchanged template
            return tmpl
        })
}

const syncSelectWithSettings = () => {
    const settings = getSettings()
    const select = document.getElementById('run-templates') as HTMLSelectElement

    // Remove all
    select.innerHTML = ''

    // Add added
    settings
        .runTemplates
        .forEach(tmpl => { select.options.add(generateOption(tmpl.name)) })

    select.value = settings.selectedRunTemplate ?? ''
}

const checkForDuplicates = (templateName: string) => {
    const success = !getSettings().runTemplates.find(tmp => tmp.name === templateName)

    if (!success) {
        toastr.error('Template name already exists')
    }

    return success
}

const showCloneCreatePopup = async (fromTemplate?: RunTemplate) => {
    globalThis.console.info(`[${MODULE_NAME}]`, 'Create popup created')

    const settings = getSettings()

    const template = fromTemplate === undefined
        ? { ...emptyRunTemplate }
        : { ...fromTemplate, name: `${fromTemplate.name} (copy)` }

    const popup = new Popup(
        'New run template name (UNIQUE)',
        POPUP_TYPE.INPUT,
        template.name,
        {
            okButton: 'Create',
            cancelButton: 'Cancel',
            wide: true,
            // There should be no duplicates
            onClosing: pop => checkForDuplicates(pop.value as string),
        })

    const templateName = await popup.show()
    if (templateName && typeof templateName === 'string') {
        template.name = templateName

        settings.runTemplates.push(template)
        settings.selectedRunTemplate = templateName

        saveExtensionSettings()
    }

    syncSelectWithSettings()
}

const showClonePopup = async () => {
    const settings = getSettings()
    const originalTemplate = settings.runTemplates.find(tmp => tmp.name === settings.selectedRunTemplate)
    await showCloneCreatePopup(originalTemplate)
}

const showCreatePopup = async () => {
    await showCloneCreatePopup()
}

const showEditPopup = async () => {
    const select = document.getElementById('run-templates') as HTMLSelectElement
    const targetName = select.value

    const template = getSettings().runTemplates.find(tmp => tmp.name === targetName)
    if (template === undefined) {
        globalThis.console.error(`[${MODULE_NAME}]`, `run template not found by name ${targetName}`)

        return
    }

    const updatedTemplate = await showRunTemplateEditPopup(template)

    const idx = getSettings().runTemplates.findIndex(tmp => tmp.name === targetName)
    getSettings().runTemplates[idx] = updatedTemplate

    saveExtensionSettings()
    syncSelectWithSettings()
}

const showDeletePopup = async () => {
    const settings = getSettings()
    const select = document.getElementById('run-templates') as HTMLSelectElement

    const popup = new Popup(
        `Delete run template '${settings.selectedRunTemplate ?? ''}'?`,
        POPUP_TYPE.CONFIRM,
        '',
        {
            okButton: 'Delete',
            cancelButton: 'Cancel',
            wide: true,
        })

    if (await popup.show()) {
        settings.runTemplates = settings.runTemplates.filter(tmp => tmp.name !== select.value)
        settings.selectedRunTemplate = settings.runTemplates.at(0)?.name

        saveExtensionSettings()
        syncSelectWithSettings()
    }
}

const updateSelectedTemplate = (event: Event) => {
    getSettings().selectedRunTemplate = (event.target as HTMLSelectElement).value

    saveExtensionSettings()
}

export const switchRunStatus = async () => {
    const selectedTemplate = getSettings().selectedRunTemplate

    if (selectedTemplate === undefined) {
        return
    }

    const selectedModel = getSettings().runTemplates.find(tmpl => tmpl.name === selectedTemplate)

    if (selectedModel === undefined) {
        throw new Error(`can't find model ${selectedTemplate}`)
    }

    // Blocking input, showing loader
    refreshModelState({ status: 'loading', model: selectedModel.model })

    const currentState = await loadModelStatus()

    // Handle switch for handable statuses
    switch (currentState.status) {
        case 'failed':
        case 'offline': {
            startModel(selectedModel)
                .then(() => waitForModelStatus('online'))
                .then(state => refreshModelState(state))
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        case 'online': {
            stopModel()
                .then(() => waitForModelStatus('offline'))
                .then(state => refreshModelState(state))
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        default: {
            toastr.error(`Model ${currentState.model} currently in NOOP state '${currentState.status}'`)
        }
    }
}

globalThis.statusSwitchAction = switchRunStatus

export const addSettingsControls = async () => {
    const settingsContainer = document.getElementById('kobold-switcher-container') ?? document.getElementById('extensions_settings2');
    if (!settingsContainer) {
        return
    }

    const renderer = document.createElement('template')
    renderer.innerHTML = html

    settingsContainer.appendChild(renderer.content)

    const elements = {
        templatesSelect: document.getElementById('run-templates') as HTMLSelectElement,
        create: document.getElementById('kss-run-template-create') as HTMLDivElement,
        clone: document.getElementById('kss-run-template-clone') as HTMLDivElement,
        edit: document.getElementById('kss-run-template-edit') as HTMLDivElement,
        delete: document.getElementById('kss-run-template-delete') as HTMLDivElement,
    }

    elements.templatesSelect.onchange = updateSelectedTemplate
    elements.create.onclick = showCreatePopup
    elements.clone.onclick = showClonePopup
    elements.edit.onclick = showEditPopup
    elements.delete.onclick = showDeletePopup

    refreshModelState(await loadModelStatus())

    saveExtensionSettings()
    syncSelectWithSettings()
}
