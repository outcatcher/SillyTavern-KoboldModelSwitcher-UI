import { SlashCommandEnumValue } from '/e/ll_models/SillyTavern-Launcher/SillyTavern/public/scripts/slash-commands/SlashCommandEnumValue'

import { startOfflineModelAndWait } from './model_state'
import { getSettings } from './settings'

const {
    SlashCommandParser,
    SlashCommandArgument,
    SlashCommand,
    ARGUMENT_TYPE,
} = SillyTavern.getContext()

export const registerSlashCommands = () => {
    const startModelCommand = SlashCommand.fromProps({
        name: 'start-model',
        callback: async (_nargs, args) => {
            const [name] = args as string[]

            return await startOfflineModelAndWait(name)
                .catch((err: unknown) => {
                    const errMsg = `Failed to start model ${name}: ${(err as Error).message}`

                    toastr.error(errMsg)

                    return errMsg
                })
        },
        unnamedArgumentList: [
            SlashCommandArgument.fromProps({
                description: 'name of template to start',
                typeList: [ARGUMENT_TYPE.STRING],
                isRequired: true,
                enumProvider: () => getSettings().runTemplates.map(tmpl => new SlashCommandEnumValue(tmpl.name, tmpl.model)),
                forceEnum: true,
                defaultValue: getSettings().selectedRunTemplate,
            }),
        ],
        helpString: 'Starts KoboldCpp with configuration from selected template',
        splitUnnamedArgument: true,
    })

    SlashCommandParser.addCommandObject(startModelCommand)
}
