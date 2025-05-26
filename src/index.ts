import './style.css';

import { MODULE_NAME } from './consts';
import { init as initHeaders } from './requests';
import { addSettingsControls } from './settings_render';

// Main extension initialization function
await (async function initExtension() {
    globalThis.console.debug(`[${MODULE_NAME}]`, 'Initializing extension');

    await addSettingsControls()
    await initHeaders()

    globalThis.console.debug(`[${MODULE_NAME}]`, 'Extension initialized');
})()
