import { ProviderType } from '../enum/ProviderType';
export interface WalletSelectorInterface {
    selectType(dappName: string, reownVerified: boolean, latestProviderType: ProviderType | null, isFromEvent: boolean): Promise<ProviderType>;
}
