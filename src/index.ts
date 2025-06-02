import './style.css';

import { registerSlashCommands } from './commands';
import { MODULE_NAME } from './consts';
import { initHeaders } from './requests';
import { addSettingsControls } from './settings_render';

// Main extension initialization function
await (async function initExtension() {
    globalThis.console.debug(`[${MODULE_NAME}]`, 'Initializing extension');

    await initHeaders()
    await addSettingsControls()
    registerSlashCommands()

    globalThis.console.debug(`[${MODULE_NAME}]`, 'Extension initialized');
})()
