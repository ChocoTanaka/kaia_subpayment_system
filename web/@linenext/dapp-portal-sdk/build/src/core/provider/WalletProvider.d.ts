import { WalletType } from '../enum/WalletType';
import { RpcSuccessResponse } from '../message/RpcMessage';
import { EIP1193Provider, RequestArguments } from './interface';
export interface WalletProvider extends EIP1193Provider {
    host: string;
    connected: boolean;
    timeout: number;
    getWalletType(): WalletType | null;
    disconnectWallet(): Promise<void>;
    request(requestArgs: RequestArguments): Promise<unknown>;
    getErc20TokenBalance(contractAddress: string, walletAddress: string): Promise<string>;
    getErc20TokenBalanceWithDepositedBalance(contractAddress: string, walletAddress: string): Promise<string>;
    send(payload: object, callback?: (error: Error | null, result: RpcSuccessResponse | undefined) => void): Promise<void>;
    supportsSubscriptions(): boolean;
    disconnect(): boolean;
    emit(event: string | symbol, ...args: unknown[]): boolean;
    off(event: string | symbol, listener: (...args: unknown[]) => void): this;
    once(event: string | symbol, listener: (...args: unknown[]) => void): this;
    removeAllListeners(event?: string | symbol): this;
    listenerCount(event: string | symbol): number;
    listeners(event: string | symbol): ((...args: unknown[]) => void)[];
    setProviderConfig(dappPortalApiBaseUrl: string, isLiff: boolean): void;
}
