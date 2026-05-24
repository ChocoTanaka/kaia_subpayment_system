import { RelayRequestClient } from '../client/RelayRequestClient';
import { DappPortalSDKConfig } from '../config/config';
import { ProviderType } from '../enum/ProviderType';
import { RpcResponse } from '../message/RpcMessage';
import { RequestArguments } from '../provider/interface';
export declare abstract class RelayCommunicator {
    protected readonly relayRequestClient: RelayRequestClient;
    protected readonly config: DappPortalSDKConfig;
    protected constructor(config: DappPortalSDKConfig);
    abstract postRequestAndWaitForResponse<T>(request: RequestArguments, selectedProviderType: ProviderType | null): Promise<T>;
    protected handleRpcResponse<T>(response: RpcResponse): T;
    protected createRequestKey(): string;
}
