import { RequestArguments } from '../provider/interface';
export interface BitgetWindow {
    bitkeep?: BitgetExtension;
}
export interface BitgetExtension {
    ethereum: BitgetEthereumInterface;
}
export interface BitgetEthereumInterface {
    chainId: string;
    request(args: RequestArguments): Promise<unknown>;
    on(eventName: string, callback: (message: any) => void): void;
    removeAllListeners(event?: any): this;
    disconnect: () => Promise<void>;
}
export declare function isBitgetWalletExtensionInstalled(): boolean;
export declare function getBitgetExtension(): BitgetEthereumInterface;
