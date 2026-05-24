import { DappPortalSDKConfig } from '../config/config';
import { BannerDisplayTiming, NoticeDto } from '../dto/NoticeDto';
export declare class NoticeApiClient {
    private readonly baseUrl;
    private readonly clientId;
    constructor(config: DappPortalSDKConfig);
    getNotices: (walletAddress: string | null, bannerDisplayTiming: BannerDisplayTiming) => Promise<NoticeDto[]>;
}
