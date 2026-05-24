import { EventEmitter } from 'eventemitter3';
import { DappPortalSDKConfig } from '../../config/config';
import { SdkDappInfoDto } from '../../dto/SdkDappInfoDto';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export declare class WalletConnectProviderHandler extends ProviderHandlerInterface {
    private readonly walletName;
    private readonly eventBus;
    private readonly config;
    private readonly walletConnectClient;
    constructor(eventBus: EventEmitter, config: DappPortalSDKConfig, walletName: string, clientInfo: SdkDappInfoDto);
    static init(eventBus: EventEmitter, config: DappPortalSDKConfig, walletName: string): Promise<WalletConnectProviderHandler>;
    getConnectedAddresses(): Promise<string[]>;
    connect(): Promise<string[]>;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    connectAndSign(params: unknown[] | undefined): Promise<string[]>;
    shouldStoreConnectedAddressToStorage(): boolean;
    switchChain(_chainId: string): Promise<void>;
    private getCurrentChainId;
    disconnect(): Promise<void>;
    private convertToEthParam;
    private convertInputFieldToDataField;
    private convertLegacyResponse;
    private requestWithConverter;
    private convertBitgetRpcError;
    private convertWalletConnectError;
}
