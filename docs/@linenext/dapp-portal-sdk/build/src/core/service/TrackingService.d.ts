import { DappPortalSDKConfig } from '../config/config';
declare global {
    interface Window {
        dpTrackingId?: string;
    }
}
export declare const trackingIdKey = "dp_tracking_id";
export default class TrackingService {
    private readonly baseUrl;
    private readonly clientId;
    private readonly utmParamKeys;
    private readonly sdkCookieStorage;
    private readonly sdkLocalStorage;
    private readonly trackingId;
    private constructor();
    static init(config: DappPortalSDKConfig): TrackingService;
    private static initTrackingId;
    private updateTrackingId;
    private static getTrackingIdFromUrl;
    private initUtmParams;
    getTrackingId(): string;
    sendWalletActivity(action: string, data?: Record<string, any>): void;
}
