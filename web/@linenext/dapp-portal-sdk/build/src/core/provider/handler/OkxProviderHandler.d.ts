import { OKXUniversalConnectUI } from '@okxconnect/ui';
import { EventEmitter } from 'eventemitter3';
import { DappPortalSDKConfig } from '../../config/config';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export declare class OkxProviderHandler extends ProviderHandlerInterface {
    private readonly eventBus;
    private readonly config;
    private readonly universalUi;
    constructor(eventBus: EventEmitter, config: DappPortalSDKConfig, universalUi: OKXUniversalConnectUI);
    static init(eventBus: EventEmitter, config: DappPortalSDKConfig): Promise<OkxProviderHandler>;
    getConnectedAddresses(): Promise<string[]>;
    connect(): Promise<string[]>;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    connectAndSign(params: unknown[] | undefined): Promise<string[]>;
    shouldStoreConnectedAddressToStorage(): boolean;
    switchChain(chainId: string): Promise<void>;
    disconnect(): Promise<void>;
    private setOkxEventProxy;
    private convertToEthParam;
    private convertSignTypedDataV4Field;
    private convertInputFieldToDataField;
    private stripOkxAccountPrefix;
}
