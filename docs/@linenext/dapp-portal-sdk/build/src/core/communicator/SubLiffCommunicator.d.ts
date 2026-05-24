import { DappPortalSDKConfig } from '../config/config';
import { RpcResponse } from '../message/RpcMessage';
import { RequestArguments } from '../provider/interface';
import { RelayCommunicator } from './CommunicatorBase';
export declare class SubLiffCommunicator extends RelayCommunicator {
    private readonly trackingId;
    constructor(config: DappPortalSDKConfig, trackingId: string);
    postRequestAndWaitForResponse: <T>(request: RequestArguments) => Promise<T>;
    waitForResponse: (requestKey: string) => Promise<RpcResponse>;
    private openWallet;
}
