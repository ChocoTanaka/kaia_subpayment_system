import { RequestArguments } from '../provider/interface';
export interface KaiaWindow {
    klaytn?: KaiaLegacyExtension;
}
export interface KaiaLegacyExtension {
    networkVersion: string;
    request(args: RequestArguments): Promise<unknown>;
    on(eventName: string, callback: (message: any) => void): void;
    removeAllListeners(event?: any): this;
}
export declare function isKaiaWalletExtensionInstalled(): boolean;
export declare function getKaiaWalletExtension(): KaiaLegacyExtension;
export declare function convertLegacyRpcError(err: unknown): unknown;
export declare function convertLegacyResponse(method: string, response: unknown): unknown;
