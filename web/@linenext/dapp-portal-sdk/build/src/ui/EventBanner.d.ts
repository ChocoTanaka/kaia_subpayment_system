import { BannerType } from '../core/enum/BannerType';
export declare enum EventBannerType {
    EVENT_BANNER_SIMPLE = "SIMPLE"
}
export declare const getEventBanner: (eventId: string, type: EventBannerType, message: Record<string, string>, imageUrl: string, bannerType: BannerType) => string;
