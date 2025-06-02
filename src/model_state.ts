import { ModelState } from "./consts"
import { loadModelStatus, startModel, stopModel } from "./requests"
import { getSettings } from "./settings"
import { waitFor } from "./timers"

const msInS = 1000

interface waitOpts {
    timout: number
    retry: number
    waitMsg: string
}

// Waits for target status tracking progress with a toast returning final model state.
export const waitForModelStatus = async (templateName: string, state: ModelState): Promise<ModelState> => {
    const params: waitOpts = state === 'online' ? {
        timout: 120000,
        retry: 2000,
        waitMsg: `Starting KoboldCpp with template ${templateName}`,
    } : {
        timout: 10000,
        retry: 200,
        waitMsg: `Stopping KoboldCpp currently running model`,
    }

    const progressToast = toastr.info(
        params.waitMsg,
        undefined,
        { timeOut: params.timout },
    )

    let lastModelState = (await loadModelStatus()).state

    const modelStateReached = async () => {
        lastModelState = (await loadModelStatus()).state

        return [state, 'failed'].includes(lastModelState)
    }

    const online = state === 'online'

    return await waitFor(modelStateReached, params.timout, params.retry)
        .then(() => {
            if (lastModelState === state) {
                toastr.success(`Model from template ${templateName} successfully ${online ? 'started' : 'stopped'}`)
            } else {
                toastr.error(`Model from template ${templateName} failed to ${online ? 'start' : 'stop'}`)
            }

            return lastModelState
        })
        .catch(() => {
            toastr.error(
                'Error',
                `Failed to wait for model status ${state} ` +
                `after ${(params.timout / msInS).toString()} seconds`,
            )

            return lastModelState
        })
        .finally(() => {
            progressToast.remove()
        })
}

export const startOfflineModelAndWait = async (templateName: string) => {
    const selectedModel = getSettings().runTemplates.find(tmpl => tmpl.name === templateName)

    if (selectedModel === undefined) {
        throw new Error(`can't find model ${templateName}`)
    }

    return await startModel(selectedModel)
        .then(() => waitForModelStatus(templateName, 'online'))
}

export const stopOnlineModelAndWait = async (templateName: string) =>
    await stopModel()
        .then(() => waitForModelStatus(templateName, 'offline'))
