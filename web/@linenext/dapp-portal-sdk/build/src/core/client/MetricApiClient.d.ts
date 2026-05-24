import { DappPortalSDKConfig } from '../config/config';
import { WalletProvider } from '../provider/WalletProvider';
export declare class MetricApiClient {
    private readonly baseUrl;
    private readonly clientId;
    private readonly sdkLocalStorage;
    private readonly trackingId;
    constructor(config: DappPortalSDKConfig, trackingId: string);
    sendSdkInitializeMetric: (walletProvider: WalletProvider) => Promise<void>;
    sendWalletMetric: (action: string, walletAddress: string | null, walletType: string | null) => Promise<void>;
    getReviewAndSolve: (url: string, body: any) => Promise<import("../model/BureaucracyModel").BureaucracyReviewResult | undefined>;
}
