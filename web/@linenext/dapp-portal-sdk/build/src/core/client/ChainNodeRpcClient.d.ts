import { DappPortalSDKConfig } from '../config/config';
import { RequestArguments } from '../provider/interface';
export declare class ChainNodeRpcClient {
    private readonly chainRpcUrl;
    constructor(config: DappPortalSDKConfig);
    requestRpc(request: RequestArguments): Promise<unknown>;
}
