import { ALLOWED_CTX_SIZES, ModelState, TEXT_LIST_SEP } from "./consts";
import { generateOption } from "./elements";
import { startOfflineModelAndWait, stopOnlineModelAndWait } from './model_state';
import { loadAvailableModels, loadModelStatus } from "./requests";
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
        contextSizeSelect: document.getElementById('context-size') as HTMLSelectElement,
        gpuLayers: document.getElementById('gpu-layers') as HTMLInputElement,
        threads: document.getElementById('threads') as HTMLInputElement,
        tensorSplit: document.getElementById('tensor-split') as HTMLInputElement,
    }

    ALLOWED_CTX_SIZES
        .forEach(size => {
            elements
                .contextSizeSelect
                .appendChild(generateOption(size.toString(), { selected: size === tmpl.contextSize }))
        })

    const existingModels = await loadAvailableModels()
    existingModels
        .forEach(model => {
            elements
                .modelSelect
                .appendChild(generateOption(model, { selected: model === tmpl.model }))
        })

    const tmplData = tmpl ?? emptyRunTemplate

    elements.modelSelect.value = tmplData.model ?? ''
    elements.modelSelect.onchange = () => { tmplData.model = elements.modelSelect.value }

    elements.contextSizeSelect.value = tmplData.contextSize?.toString() ?? ''
    elements.contextSizeSelect.onchange = () => { tmplData.contextSize = parseInt(elements.contextSizeSelect.value, 10) }

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

const showCreatePopup = async () => {
    globalThis.console.info('Create popup created')

    const settings = getSettings()

    const popup = new Popup(
        'New run template name (UNIQUE)',
        POPUP_TYPE.INPUT,
        '',
        {
            okButton: 'Create',
            cancelButton: 'Cancel',
            wide: true,
            // There should be no duplicates
            onClosing: pop => checkForDuplicates(pop.value as string),
        })

    let templateName = await popup.show()
    if (templateName && typeof templateName === 'string') {
        if (settings.runTemplates.find(tmp => tmp.name === templateName)) {
            templateName = `${templateName} (${Date.now().toString()})`
        }

        settings.runTemplates.push({ ...emptyRunTemplate, name: templateName })

        saveExtensionSettings()
    }

    syncSelectWithSettings()
}

const showClonePopup = async () => {
    const settings = getSettings()

    const selectedTemplate = getSettings().runTemplates.find(tmp => tmp.name === settings.selectedRunTemplate)

    if (settings.selectedRunTemplate === undefined || selectedTemplate === undefined) {
        await showCreatePopup()

        return
    }

    const popup = new Popup(
        'New run template name (UNIQUE)',
        POPUP_TYPE.INPUT,
        `${settings.selectedRunTemplate} (copy)`,
        {
            okButton: 'Create',
            cancelButton: 'Cancel',
            wide: true,
            // There should no duplicates
            onClosing: pop => checkForDuplicates(pop.value as string),
        })

    let templateName = await popup.show()
    if (templateName && typeof templateName === 'string') {
        if (settings.runTemplates.find(tmp => tmp.name === templateName)) {
            templateName = `${templateName} (${Date.now().toString()})`
        }

        settings.runTemplates.push({ ...selectedTemplate, name: templateName })

        saveExtensionSettings()
    }

    syncSelectWithSettings()
}

const showEditPopup = async () => {
    const select = document.getElementById('run-templates') as HTMLSelectElement
    const targetName = select.value

    const template = getSettings().runTemplates.find(tmp => tmp.name === targetName)
    if (template === undefined) {
        globalThis.console.error(`run template not found by name ${targetName}`)

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

        saveExtensionSettings()
        syncSelectWithSettings()
    }
}

const updateSelectedTemplate = (event: Event) => {
    getSettings().selectedRunTemplate = (event.target as HTMLSelectElement).value

    saveExtensionSettings()
}

const
    statusClasses = ['redOverlayGlow', 'okText', 'comment'],
    switcherLoaderClasses = ['loader'],
    switcherOfflineClasses = ['fa-play', 'active'],
    switcherOnlineClasses = ['fa-stop', 'redOverlayGlow']


interface switcherState {
    switcherClasses: string[]
    statusClasses: string[]
    text: string
    clickAction: (() => Promise<void>) | null
}

const updateStateElements = (state: switcherState) => {
    const elements = {
        switcher: document.getElementById('kss-run-template-start') as HTMLDivElement,
        status: document.getElementById('kss-current-status') as HTMLDivElement
    }

    elements.switcher.classList.remove(...switcherOnlineClasses, ...switcherOfflineClasses, ...switcherLoaderClasses)
    elements.switcher.classList.add(...state.switcherClasses)

    elements.status.classList.remove(...statusClasses)
    elements.status.classList.add(...state.statusClasses)

    elements.status.innerHTML = `<h4>${state.text}</h4>`
}

const refreshModelState = (state: ModelState, modelName?: string) => {
    globalThis.console.info(`Updating model info for state ${state}`)

    switch (state) {
        case 'failed':
        case 'offline': {
            updateStateElements({
                switcherClasses: switcherOfflineClasses,
                statusClasses: ['redOverlayGlow'],
                text: 'All models are offline',
                clickAction: globalThis.statusSwitchAction,
            })
            return
        }
        case 'online': {
            updateStateElements({
                switcherClasses: switcherOnlineClasses,
                statusClasses: ['okText'],
                text: modelName ?? 'Unknown model',
                clickAction: globalThis.statusSwitchAction,
            })
            return
        }
        default: {
            updateStateElements({
                switcherClasses: switcherOnlineClasses,
                statusClasses: ['comment'],
                text: 'Loading...',
                clickAction: null,
            })
        }
    }
}

const switchRunStatus = async () => {
    const selectedTemplate = getSettings().selectedRunTemplate

    if (selectedTemplate === undefined) {
        return
    }

    // Blocking input, showing loader
    refreshModelState('loading')

    const currentState = await loadModelStatus()

    // Handle switch for handable statuses
    switch (currentState.state) {
        case 'failed':
        case 'offline': {
            startOfflineModelAndWait(selectedTemplate)
                .then(state => { refreshModelState(state) })
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        case 'online': {
            stopOnlineModelAndWait(selectedTemplate)
                .then(state => { refreshModelState(state, currentState.model) })
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        default: {
            toastr.error(`Model ${currentState.model} currently in NOOP state '${currentState.state}'`)
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

    elements.create.onclick = showCreatePopup
    elements.clone.onclick = showClonePopup
    elements.edit.onclick = showEditPopup
    elements.delete.onclick = showDeletePopup
    elements.templatesSelect.onchange = updateSelectedTemplate


    refreshModelState((await loadModelStatus()).state)

    saveExtensionSettings()
    syncSelectWithSettings()
}
