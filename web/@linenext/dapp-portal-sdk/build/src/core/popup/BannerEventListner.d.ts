import { EventBannerType } from '../../ui/EventBanner';
import { DappPortalSDKConfig } from '../config/config';
import { EventBannerDto } from '../dto/EventDto';
import { BannerType } from '../enum/BannerType';
export declare class BannerEventListner {
    private readonly config;
    constructor(config: DappPortalSDKConfig);
    private iframe?;
    private eventId?;
    private bannerType;
    private clickEvent?;
    private cancelEvent?;
    private eventListener?;
    setupListeners(type: EventBannerType, eventId: string, bannerType: BannerType): void;
    private clearListeners;
    reset(eventId: string): void;
    openBanner(eventId: string, eventBanner: EventBannerDto, clickEvent: () => void, closeEvent: () => void, bannerType: BannerType): Promise<void>;
}
