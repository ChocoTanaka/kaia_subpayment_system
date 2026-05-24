import { BannerType } from '../enum/BannerType';
export declare class SdkLocalStorage {
    private readonly chainId;
    constructor(chainId: string);
    clear(): void;
    setWalletType(walletType: string): void;
    getWalletType(): string | null;
    setProviderType(providerType: string): void;
    getProviderType(): string | null;
    setSelectedWallet(walletAddress: string): void;
    getConnectedWallet(): string | null;
    getDeviceId(): string | null;
    setDeviceId(deviceId: string): void;
    getEventRead(eventId: string, bannerType: BannerType): boolean;
    setEventRead(eventId: string, read: boolean, bannerType: BannerType): void;
    getNoticeRead(noticeId: string): boolean;
    setNoticeRead(noticeId: string, read: boolean): void;
    getMissionCompleted(walletAddress: string): [string, boolean];
    setMissionCompleted(eventId: string, completed: boolean, walletAddress: string): void;
    private getKeyWithPrefix;
    private setItem;
    private getItem;
    private removeItem;
}
