import { DappPortalSDKConfig } from '../config/config';
import { RequestArguments } from '../provider/interface';
import { RelayCommunicator } from './CommunicatorBase';
export default class MobileWalletCommunicator extends RelayCommunicator {
    private readonly trackingId;
    constructor(config: DappPortalSDKConfig, trackingId: string);
    postRequestAndWaitForResponse<T>(request: RequestArguments): Promise<T>;
    private openWallet;
    private openAndroidWallet;
    private openIosWallet;
}
