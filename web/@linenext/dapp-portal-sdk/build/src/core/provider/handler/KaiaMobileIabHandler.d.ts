import { ChainNodeRpcClient } from '../../client/ChainNodeRpcClient';
import { DappPortalSDKConfig } from '../../config/config';
import { ProviderType } from '../../enum/ProviderType';
import { RequestArguments } from '../interface';
import { ProviderHandlerInterface } from './interface';
export interface RelayRequestDto {
    method: string;
    params: Array<unknown>;
}
export interface KaiaLegacyExtension {
    networkVersion: string;
    initialized: boolean;
    enable(): Promise<string>;
    request(args: RequestArguments): Promise<unknown>;
    sendAsync(payload: any, callback: (error: any, result: any) => void): void;
    on(eventName: string, callback: (message: any) => void): void;
    removeAllListeners(event?: any): this;
}
export type KaiaWalletMobileWindow = {
    klaytn?: KaiaLegacyExtension;
    ethereum?: KaiaLegacyExtension;
    flutter_inappwebview?: {
        callHandler: (handlerName: string, ...args: any[]) => Promise<any>;
    };
};
export declare class KaiaMobileIabHandler extends ProviderHandlerInterface {
    private readonly sdkLocalStorage;
    private readonly chainNodeRpcClient;
    constructor(config: DappPortalSDKConfig, chainNodeRpcClient: ChainNodeRpcClient);
    getConnectedAddresses(): Promise<string[]>;
    connect(): Promise<string[]>;
    connectAndSign(params: unknown[], _selectedProviderType: ProviderType | null): Promise<string[]>;
    shouldStoreConnectedAddressToStorage(): boolean;
    requestSign(requestArgs: RequestArguments): Promise<unknown>;
    switchChain(chainId: string): Promise<void>;
    disconnect(): Promise<void>;
    private requestEnable;
    private requestSignLegacy;
    private requestConnectAndSign;
    private requestSignTypedDataV4;
    private requestPersonalSign;
    private requestSendTransaction;
    private requestSignTransaction;
    private convertTxData;
    private callIabHandler;
}
