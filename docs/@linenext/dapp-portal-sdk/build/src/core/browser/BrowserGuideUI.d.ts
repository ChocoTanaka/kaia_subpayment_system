import { DappPortalSDKConfig } from '../config/config';
export declare class BrowserGuideUI {
    private readonly browserGuideUIUrl;
    private iframe?;
    private resolveUserClose?;
    private rejectUserClose?;
    constructor(config: DappPortalSDKConfig);
    private eventListener?;
    setupListeners(): void;
    private clearListeners;
    private onSelectedClose;
    private reset;
    showBrowserGuide(browserName: string): Promise<void>;
    cancel(): void;
}
