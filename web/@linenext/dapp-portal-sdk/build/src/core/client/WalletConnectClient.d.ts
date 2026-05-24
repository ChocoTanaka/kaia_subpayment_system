import { AppKit } from '@reown/appkit';
import { SdkDappInfoDto } from '../dto/SdkDappInfoDto';
import { RequestArguments } from '../provider/interface';
export declare class WalletConnectClient {
    private static instance;
    readonly appKit: AppKit;
    readonly walletButton: any;
    private constructor();
    static getInstance(clientInfo: SdkDappInfoDto): WalletConnectClient;
    awaitAppKitReady(): Promise<void>;
    connect(walletName: string): Promise<any>;
    getAddress(chainId: string): Promise<string>;
    request(requestArgs: RequestArguments): Promise<unknown>;
    disconnect(): Promise<void>;
    private getWalletConnectAccountChain;
    private stripWalletConnectAccountPrefix;
}
