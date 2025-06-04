/*eslint no-magic-numbers: "off"*/


export const MODULE_NAME = 'KoboldModelSwitcher'

export const TEXT_LIST_SEP = ' '

export const DEFAULT_CTX_SIZES = [
    256,
    512,
    1024,
    2048,
    3072,
    4096,
    6144,
    8192,
    10240,
    12288,
    14336,
    16384,
    20480,
    24576,
    28672,
    32768,
    40960,
    49152,
    57344,
    65536,
    81920,
    98304,
    114688,
    131072,
]


export const MAX_CONTEXT_SIZE = 262144,
    MIN_CTX_SIZE = 256

export type ModelStatus =
    'offline'
    | 'loading'
    | 'online'
    | 'stopping'
    | 'failed'
