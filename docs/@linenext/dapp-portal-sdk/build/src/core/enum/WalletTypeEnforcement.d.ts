import { WalletType } from './WalletType';
declare enum WalletTypeEnforcement {
    WEB = "WEB",
    KAIA_WALLET = "KAIA_WALLET",
    OKX = "OKX",
    BITGET = "BITGET"
}
export { WalletTypeEnforcement };
export declare function toWalletType(walletTypeEnforcement: WalletTypeEnforcement): WalletType | null;
