import { DappPortalSDKConfig } from '../config/config';
import { EventDto } from '../dto/EventDto';
import { BannerType } from '../enum/BannerType';
import TrackingService from '../service/TrackingService';
import { WalletProvider } from './WalletProvider';
export declare class InternalEventProvider {
    private readonly config;
    private readonly handler;
    private readonly bannerEventListner;
    private readonly sdkLocalStorage;
    private readonly trackingService;
    private connectionToken;
    private eventId;
    constructor(config: DappPortalSDKConfig, trackingService: TrackingService);
    initialize(walletProvider: WalletProvider): Promise<void>;
    setLiffEventListener(): void;
    private getEventParamsFromUrl;
    isFromEvent(): boolean;
    openEventBannerWhenStart(): Promise<void>;
    openEventBannerWhenConnect(walletAddress: string): Promise<void>;
    openEventBannerWhenSubMissionCompleted(eventId: string, walletAddress: string): Promise<void>;
    openBanner(event: EventDto, walletAddress: string | null, bannerType: BannerType): Promise<void>;
    delayOpenBanner(seconds: number): Promise<void>;
}
