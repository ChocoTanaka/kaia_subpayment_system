import { DappPortalSDKConfig } from '../config/config';
import { RpcResponse } from '../message/RpcMessage';
import { RequestArguments } from '../provider/interface';
export declare class RelayRequestClient {
    private readonly baseUrl;
    private readonly clientId;
    private readonly relaySessionTimeout;
    private readonly maxRetryCount;
    constructor(config: DappPortalSDKConfig);
    request: (requestArgs: RequestArguments, requestKey: string) => Promise<void>;
    waitForResponse: (requestKey: string) => Promise<RpcResponse>;
    fetchWithTimeout: (requestKey: string) => Promise<RpcResponse>;
}
