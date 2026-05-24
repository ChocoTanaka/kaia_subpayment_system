export interface RequestArguments {
    readonly method: string;
    readonly params?: unknown[];
}
interface ProviderConnectInfo {
    readonly chainId: string;
}
interface ProviderRpcError extends Error {
    readonly message: string;
    readonly code: number;
    readonly data?: unknown;
}
interface ProviderMessage {
    readonly type: string;
    readonly data: unknown;
}
export type Address = `0x${string}`;
export interface EIP1193Provider {
    on(event: 'connect', listener: (info: ProviderConnectInfo) => void): this;
    on(event: 'disconnect', listener: (error: ProviderRpcError) => void): this;
    on(event: 'chainChanged', listener: (chainId: string) => void): this;
    on(event: 'accountsChanged', listener: (accounts: Address[]) => void): this;
    on(event: 'message', listener: (message: ProviderMessage) => void): this;
    on(event: string, listener: (...args: unknown[]) => void): this;
    request(args: RequestArguments): Promise<unknown>;
}
export {};
