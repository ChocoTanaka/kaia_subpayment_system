import { DappPortalSDKConfig } from '../config/config';
import { ProviderType } from '../enum/ProviderType';
import { WalletSelectorInterface } from './interface';
export declare class IframeWalletSelector implements WalletSelectorInterface {
    private readonly walletSelectUIUrl;
    private iframe?;
    private readonly connectPageOptions?;
    private resolveProviderType?;
    private rejectProviderType?;
    private readonly sdkLocalStorage;
    constructor(config: DappPortalSDKConfig);
    private eventListener?;
    setupListeners(): void;
    private clearListeners;
    private onProviderTypeSelected;
    private reset;
    selectType(dappName: string, reownVerified: boolean, latestProviderType: ProviderType | null): Promise<ProviderType>;
    cancel(): void;
}
