import { DappPortalSDKConfig } from '../config/config';
import { ProviderType } from '../enum/ProviderType';
import { RequestArguments } from '../provider/interface';
import { RelayCommunicator } from './CommunicatorBase';
export declare class WebWalletCommunicator extends RelayCommunicator {
    private readonly clickEventListener;
    private readonly sdkLocalStorage;
    private readonly trackingId;
    constructor(config: DappPortalSDKConfig, trackingId: string);
    postRequestAndWaitForResponse: <T>(request: RequestArguments, selectedProviderType: ProviderType | null) => Promise<T>;
    postRequestWithProviderType: (request: RequestArguments, requestKey: string) => Promise<void>;
    handleResponseWithProviderType: <T>(request: RequestArguments, response: unknown) => Promise<T>;
    private isMethodNeedProviderTypeSync;
    private openWallet;
    private closeWallet;
    private getRequestBaseUrl;
}
