import { ModelStatus } from "./consts"
import { RunTemplate } from "./settings"

const modelURL = '/api/plugins/kobold-switcher/model'

class UnexpectedStatusCode extends Error { }

let token = ''

const requestHeaders = () => {
    return {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json',
    }
}

export const initHeaders = async () => {
    await fetch('/csrf-token')
        .then(resp => {
            if (!resp.ok) {
                return Promise.reject(
                    new Error(`requiest unsuccessfull, received code ${resp.status.toString()} (${resp.statusText})`)
                )
            }

            return resp.json()
        })
        .then((data: { token: string }) => {
            ({ token } = data)
        });
}

export const loadAvailableModels = async () => await fetch('/api/plugins/kobold-switcher/models')
    .then(resp => {
        if (!resp.ok) {
            return Promise.reject(
                new Error(`requiest unsuccessfull, received code ${resp.status.toString()} (${resp.statusText})`)
            )
        }

        return resp.json()
    })
    .then((data: { models: string[] }) => data.models)

export interface ModelState {
    status: ModelStatus
    model: string
    error?: string
}

export const loadModelStatus = async () => await fetch(modelURL)
    .then(resp => {
        if (!resp.ok) {
            return Promise.reject(
                new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`)
            )
        }

        return resp.json()
    }) as ModelState

export const startModel = async (opts: RunTemplate) => {
    await fetch(modelURL, {
        method: 'PUT',
        headers: requestHeaders(),
        body: JSON.stringify({
            model: opts.model,
            contextSize: opts.contextSize,
            gpuLayers: opts.gpuLayers,
            threads: opts.threads,
            tensorSplit: opts.tensorSplit,
        }),
    })
        .then(resp => {
            if (!resp.ok) {
                throw new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`)
            }
        })
}

export const stopModel = async () => {
    await fetch(modelURL, { method: 'DELETE', headers: requestHeaders() })
        .then(resp => {
            if (!resp.ok) {
                throw new UnexpectedStatusCode(`got unexpected status code ${resp.status.toString()}`)
            }
        })
}
