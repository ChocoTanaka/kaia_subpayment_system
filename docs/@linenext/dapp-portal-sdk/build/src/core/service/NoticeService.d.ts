import { DappPortalSDKConfig } from '../config/config';
import { BannerDisplayTiming } from '../dto/NoticeDto';
import { WalletProvider } from '../provider/WalletProvider';
import TrackingService from './TrackingService';
export default class NoticeService {
    private readonly noticeApiClient;
    private readonly sdkLocalStorage;
    private readonly trackingService;
    private readonly noticeBannerEventListener;
    constructor(config: DappPortalSDKConfig, trackingService: TrackingService);
    processSdkInitNoticeBanner(walletProvider: WalletProvider): Promise<void>;
    processConnectNoticeBanner(walletAddress: string): Promise<void>;
    processNoticeBanner(walletAddress: string | null, bannerDisplayTiming: BannerDisplayTiming): Promise<void>;
    private getNoticeBanners;
    private openBanner;
    delayOpenBanner(seconds: number): Promise<void>;
}
