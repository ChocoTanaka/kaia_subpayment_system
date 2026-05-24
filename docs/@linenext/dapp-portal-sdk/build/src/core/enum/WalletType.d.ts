import { ProviderType } from './ProviderType';
declare enum WalletType {
    Web = "Web",
    Liff = "Liff",
    Extension = "Extension",
    KaiaMobileIab = "KaiaMobileIab",
    Mobile = "Mobile",
    OKX = "OKX",
    BITGET = "BITGET"
}
export { WalletType };
export declare function convertToWalletType(value: ProviderType): WalletType;
