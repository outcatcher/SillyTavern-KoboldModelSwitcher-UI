import { MODULE_NAME } from "./consts"

const { saveSettingsDebounced } = SillyTavern.getContext()

export interface RunTemplate {
    name: string
    model: string
    contextSize?: number
    gpuLayers?: number
    threads?: number
    tensorSplit?: number[]
}

export const emptyRunTemplate: Readonly<RunTemplate> = Object.freeze({
    name: '',
    model: '',
})

interface ExtensionSettings {
    selectedRunTemplate?: string
    runTemplates: RunTemplate[]
}

interface GlobalSettings {
    [MODULE_NAME]: ExtensionSettings;
}

const defaultSettings: Readonly<ExtensionSettings> = Object.freeze({
    runTemplates: [],
})

export const getSettings = () => {
    const context = SillyTavern.getContext();
    const globalSettings = context.extensionSettings as object as GlobalSettings;

    // Initialize settings if they don't exist
    if (!globalSettings[MODULE_NAME]) {
        globalSettings[MODULE_NAME] = structuredClone(defaultSettings);
    }

    return globalSettings[MODULE_NAME]
}

export const saveExtensionSettings = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    saveSettingsDebounced()
}
