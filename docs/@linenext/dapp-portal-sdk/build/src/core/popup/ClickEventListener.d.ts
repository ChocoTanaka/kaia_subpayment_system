import { ClickEventEmitterUiType } from '../../ui/ClickEventEmitter';
import { DappPortalSDKConfig } from '../config/config';
export declare class ClickEventListener {
    private readonly config;
    constructor(config: DappPortalSDKConfig);
    private iframe?;
    private resolvePromise?;
    private rejectPromise?;
    private eventListener?;
    setupListeners(type: ClickEventEmitterUiType): void;
    private clearListeners;
    reset(): void;
    awaitUserClick(type: ClickEventEmitterUiType, params?: Record<string, any>): Promise<void>;
}
