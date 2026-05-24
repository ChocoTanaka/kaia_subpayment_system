import { DappPortalSDKConfig } from '../config/config';
import { ProviderType } from '../enum/ProviderType';
import { WalletSelectorInterface } from './interface';
export declare class LiffWalletSelector implements WalletSelectorInterface {
    private readonly walletSelectUIUrl;
    private readonly connectPageOptions?;
    private iframe?;
    private resolveProviderType?;
    private rejectProviderType?;
    constructor(config: DappPortalSDKConfig);
    private onProviderTypeSelected;
    selectType(dappName: string, reownVerified: boolean, latestProviderType: ProviderType | null, isFromEvent: boolean): Promise<ProviderType>;
    cancel(): void;
}
