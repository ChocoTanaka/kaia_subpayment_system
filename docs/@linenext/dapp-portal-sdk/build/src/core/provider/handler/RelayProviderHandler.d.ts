import { RelayCommunicator } from '../../communicator/CommunicatorBase';
import { DappPortalSDKConfig } from '../../config/config';
import { ProviderType } from '../../enum/ProviderType';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export declare class RelayProviderHandler extends ProviderHandlerInterface {
    private readonly communicator;
    private readonly sdkLocalStorage;
    constructor(config: DappPortalSDKConfig, communicator: RelayCommunicator);
    getConnectedAddresses(): Promise<string[]>;
    connect(selectedProviderType: ProviderType | null): Promise<string[]>;
    connectAndSign(params: unknown[] | undefined, selectedProviderType: ProviderType | null): Promise<string[]>;
    shouldStoreConnectedAddressToStorage(): boolean;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    switchChain(_chainId: string): Promise<void>;
    disconnect(): Promise<void>;
}
