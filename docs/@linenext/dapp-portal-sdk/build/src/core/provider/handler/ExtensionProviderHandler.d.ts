import { EventEmitter } from 'eventemitter3';
import { DappPortalSDKConfig } from '../../config/config';
import { KaiaLegacyExtension } from '../../util/ExtensionUtil';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export declare class ExtensionProviderHandler extends ProviderHandlerInterface {
    private readonly eventBus;
    private readonly config;
    constructor(eventBus: EventEmitter, config: DappPortalSDKConfig);
    getConnectedAddresses(): Promise<string[]>;
    connect(): Promise<string[]>;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    connectAndSign(params: unknown[] | undefined): Promise<string[]>;
    shouldStoreConnectedAddressToStorage(): boolean;
    switchChain(_chainId: string): Promise<void>;
    disconnect(): Promise<void>;
    awaitNetworkChange(kaiaWalletExtension: KaiaLegacyExtension, expectedChainId: string): Promise<unknown>;
    private requestWithConverter;
    private setExtensionEventProxy;
    private appendTxTypeParam;
    private convertToLegacyParam;
    private appendTxTypeToObj;
    private convertInputFieldToDataField;
}
