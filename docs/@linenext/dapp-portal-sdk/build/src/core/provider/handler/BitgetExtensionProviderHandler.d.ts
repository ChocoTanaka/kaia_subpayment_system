import { EventEmitter } from 'eventemitter3';
import { DappPortalSDKConfig } from '../../config/config';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export declare class BitgetExtensionProviderHandler extends ProviderHandlerInterface {
    private readonly eventBus;
    private readonly config;
    constructor(eventBus: EventEmitter, config: DappPortalSDKConfig);
    getConnectedAddresses(): Promise<string[]>;
    connect(): Promise<string[]>;
    connectAndSign(params: unknown[] | undefined): Promise<string[]>;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    shouldStoreConnectedAddressToStorage(): boolean;
    private requestWithConverter;
    switchChain(_chainId: string): Promise<void>;
    disconnect(): Promise<void>;
    private setExtensionEventProxy;
    private convertToLegacyParam;
    private convertInputFieldToDataField;
    private convertLegacyResponse;
    private convertBitgetRpcError;
}
