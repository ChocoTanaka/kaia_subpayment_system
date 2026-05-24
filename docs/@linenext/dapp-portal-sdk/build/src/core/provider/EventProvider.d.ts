import { DappPortalSDKConfig } from '../config/config';
import { InternalEventProvider } from './InternalEventProvider';
import { WalletProvider } from './WalletProvider';
export declare class EventProvider {
    private readonly config;
    private readonly handler;
    private readonly walletProvider;
    private readonly internalEventProvider;
    private readonly sdkLocalStorage;
    constructor(config: DappPortalSDKConfig, walletProvider: WalletProvider, internalEventProvider: InternalEventProvider);
    callback(eventId: string, subMissionIndex: string): Promise<void>;
}
export default EventProvider;
