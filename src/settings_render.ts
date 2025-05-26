import { ALLOWED_CTX_SIZES, TEXT_LIST_SEP } from "./consts";
import { generateOption } from "./elements";
import { loadAvailableModels, loadModelStatus, startModel, stopModel } from "./requests";
import editorHTML from './run_template.html';
import { emptyRunTemplate, getSettings, RunTemplate, saveExtensionSettings } from "./settings";
import html from './settings.html';
import { waitFor } from "./timers";
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
    switcherLoaderClasses = ['loader'],
    switcherOfflineClasses = ['fa-play', 'active'],
    switcherOnlineClasses = ['fa-stop', 'redOverlayGlow']

const loadingStatus = () => {
    const elements = {
        switcher: document.getElementById('kss-run-template-start') as HTMLDivElement,
        status: document.getElementById('kss-current-status') as HTMLDivElement
    }

    elements.switcher.onclick = null
    // Remove all possible status classes
    elements.switcher.classList.remove(...switcherOnlineClasses, ...switcherOfflineClasses)
    elements.switcher.classList.add(...switcherLoaderClasses)

    elements.status.classList.remove('enabled', 'redOverlayGlow')
    elements.status.classList.add('comment')
    elements.status.innerHTML = `<h4>Loading...</h4>`
}

const updateStatus = async (clickCallback: (ev: MouseEvent) => Promise<void>) => {
    const modelStatus = await loadModelStatus()

    const elements = {
        switcher: document.getElementById('kss-run-template-start') as HTMLDivElement,
        status: document.getElementById('kss-current-status') as HTMLDivElement
    }

    const online = modelStatus.status === 'online'

    const switcherNewClasses = online
        ? switcherOnlineClasses
        : switcherOfflineClasses

    elements.switcher.onclick = clickCallback
    elements.switcher.classList.remove(...switcherLoaderClasses, ...switcherOnlineClasses, ...switcherOfflineClasses)
    elements.switcher.classList.add(...switcherNewClasses)

    const statusClasses = online ? ['okText'] : ['redOverlayGlow']
    const statusText = online ? modelStatus.model : 'All models are offline'

    elements.status.classList.remove('enabled', 'redOverlayGlow')
    elements.status.classList.add(...statusClasses)
    elements.status.innerHTML = `<h4>${statusText}</h4>`
}

const startOfflineModel = async (templateName: string, switchCallback: () => Promise<void>) => {
    const selectedModel = getSettings().runTemplates.find(tmpl => tmpl.name === templateName)

    if (selectedModel === undefined) {
        throw new Error(`can't find model ${templateName}`)
    }

    await startModel(selectedModel)

    const twoMinutes = 120000,
        twoSeconds = 2000

    waitFor(async () => {
        const status = await loadModelStatus()

        return ['online', 'failed'].includes(status.status)
    }, twoMinutes, twoSeconds)
        .then(async () => {
            await updateStatus(switchCallback)
        })
        .catch(() => {
            toastr.error('Failed to wait for model status online/failed')
        })
}

const stopOnlineModel = async (switchCallback: () => Promise<void>) => {
    await stopModel()

    const shortRetry = 100,
        tenSeconds = 10000

    waitFor(async () => {
        const status = await loadModelStatus()

        return ['offline', 'failed'].includes(status.status)
    }, tenSeconds, shortRetry)
        .then(async () => {
            await updateStatus(switchCallback)
        })
        .catch(() => {
            toastr.error('Failed to wait for model status offline/failed')
        })
}

const switchRunStatus = async () => {
    const selectedTemplate = getSettings().selectedRunTemplate

    if (selectedTemplate === undefined) {
        return
    }

    loadingStatus()

    const currentState = await loadModelStatus()

    // Handle switch for handable statuses
    switch (currentState.status) {
        case 'failed':
        case 'offline': {
            await startOfflineModel(selectedTemplate, switchRunStatus)
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        case 'online': {
            await stopOnlineModel(switchRunStatus)
                .catch((err: unknown) => {
                    toastr.error((err as Error).message)
                })

            break
        }
        default: {
            toastr.error(`Model ${currentState.model} currently in ${currentState.status} status`)
        }
    }
}

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

    await updateStatus(switchRunStatus)

    saveExtensionSettings()
    syncSelectWithSettings()
}
