import { ModelStatus, MODULE_NAME } from "./consts"
import { loadModelStatus, ModelState } from "./requests"
import { waitFor } from "./timers"

const msInS = 1000

interface waitOpts {
    timout: number
    retry: number
    waitMsg: string
}

// Waits for target status tracking progress with a toast returning final model state.
export const waitForModelStatus = async (status: ModelStatus): Promise<ModelState> => {
    const params: waitOpts = status === 'online' ? {
        timout: 120000,
        retry: 2000,
        waitMsg: `Starting KoboldCpp...`,
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

    let lastModelState = await loadModelStatus()

    const modelStateReached = async () => {
        lastModelState = await loadModelStatus()

        return [status, 'failed'].includes(lastModelState.status)
    }

    const online = status === 'online'

    return await waitFor(modelStateReached, params.timout, params.retry)
        .then(() => {
            if (lastModelState.status === status) {
                toastr.success('Don\'t forget to update settings', `Model successfully ${online ? 'started' : 'stopped'}`)
            } else {
                toastr.error(`Error ${lastModelState.error ?? 'unknown'}`, `Model failed to ${online ? 'start' : 'stop'}`)
            }

            return lastModelState
        })
        .catch(() => {
            toastr.error(
                'Error',
                `Failed to wait for model status ${status} ` +
                `after ${(params.timout / msInS).toString()} seconds`,
            )

            return lastModelState
        })
        .finally(() => {
            progressToast.remove()
        })
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
    elements.switcher.onclick = state.clickAction

    elements.status.classList.remove(...statusClasses)
    elements.status.classList.add(...state.statusClasses)

    elements.status.innerHTML = `<h5>${state.text}</h5>`
}

interface refreshState {
    status: ModelStatus
    model: string
}

// Refresh page elements to match the model states
export const refreshModelState = (state: refreshState) => {
    globalThis.console.info(`[${MODULE_NAME}]`, `Updating model info for status ${state.status}`)
    globalThis.console.info(`[${MODULE_NAME}]`, `Click handler is ${globalThis.statusSwitchAction.toString()}`)

    switch (state.status) {
        case 'failed':
        case 'offline': {
            updateStateElements({
                switcherClasses: switcherOfflineClasses,
                statusClasses: ['redOverlayGlow'],
                text: 'All models are offline',
                clickAction: globalThis.statusSwitchAction,
            })
            break
        }
        case 'online': {
            updateStateElements({
                switcherClasses: switcherOnlineClasses,
                statusClasses: ['okText'],
                text: state.model,
                clickAction: globalThis.statusSwitchAction,
            })
            break
        }
        case 'loading': {
            updateStateElements({
                switcherClasses: switcherLoaderClasses,
                statusClasses: ['comment'],
                text: `Loading model ${state.model}...`,
                clickAction: null,
            })
            break
        }
        case 'stopping': {
            updateStateElements({
                switcherClasses: switcherLoaderClasses,
                statusClasses: ['comment'],
                text: `Stopping model ${state.model}...`,
                clickAction: null,
            })
            break
        }
        default: {
            updateStateElements({
                switcherClasses: switcherOfflineClasses,
                statusClasses: ['redOverlayGlow'],
                text: 'Unknown model status',
                clickAction: globalThis.statusSwitchAction,
            })
        }
    }

    return `Model ${state.model} in status ${state.status}`
}
