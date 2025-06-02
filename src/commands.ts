import { SlashCommandEnumValue } from '../../../../slash-commands/SlashCommandEnumValue'
import { refreshModelState, waitForModelStatus } from './model_state'
import { loadModelStatus, startModel, stopModel } from './requests'
import { getSettings } from './settings'

const {
    SlashCommandParser,
    SlashCommandNamedArgument,
    SlashCommand,
    ARGUMENT_TYPE,
} = SillyTavern.getContext()

const koboldStart = async (nargs: unknown) => {
    const { name } = nargs as { name: string }
    const selectedModel = getSettings().runTemplates.find(tmpl => tmpl.name === name)

    if (selectedModel === undefined) {
        const errMsg = `Can't find model ${name}`
        toastr.error(errMsg)
        return errMsg
    }

    refreshModelState({ model: selectedModel.model, status: 'loading' })

    const currentStatus = await loadModelStatus()
    if (currentStatus.status === 'online') {
        await stopModel()
            .then(() => waitForModelStatus('offline'))
            .catch()
    }

    return await startModel(selectedModel)
        .then(() => waitForModelStatus('online'))
        .then(state => refreshModelState(state))
        .catch((err: unknown) => {
            const errMsg = `Failed to start model ${name}: ${(err as Error).message}`
            toastr.error(errMsg)
            return errMsg
        })
}

export const registerSlashCommands = () => {
    const startModelCommand = SlashCommand.fromProps({
        name: 'kobold-start',
        callback: koboldStart,
        namedArgumentList: [
            SlashCommandNamedArgument.fromProps({
                name: 'name',
                description: 'name of template to start',
                typeList: [ARGUMENT_TYPE.STRING],
                isRequired: true,
                enumProvider: () => getSettings().runTemplates.map(tmpl => new SlashCommandEnumValue(tmpl.name, tmpl.model)),
                forceEnum: true,
            }),
        ],
        helpString: 'Starts KoboldCpp with configuration from selected template',
    })

    SlashCommandParser.addCommandObject(startModelCommand)
}
