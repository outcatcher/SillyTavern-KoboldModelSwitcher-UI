export { };

// 1. Import when extension is user-scoped
import '../../../../public/global';
// 2. Import when extension is server-scoped
import '../../../../global';
import '/e/ll_models/SillyTavern-Launcher/SillyTavern/public/global'

declare global {
    function statusSwitchAction(): Promise<void>;
}
