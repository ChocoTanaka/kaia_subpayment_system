import { DappPortalSDKConfig } from '../config/config';
import { SdkDappInfoDto } from '../dto/SdkDappInfoDto';
export declare class DappClient {
    private readonly baseUrl;
    private readonly clientId;
    constructor(config: DappPortalSDKConfig);
    fetchClientInfo: () => Promise<SdkDappInfoDto>;
}
