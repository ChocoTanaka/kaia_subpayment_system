import { ProviderType } from '../../enum/ProviderType';
import { RequestArguments } from '../interface';
export declare abstract class ProviderHandlerInterface {
    abstract getConnectedAddresses(): Promise<string[]>;
    abstract connect(selectedProviderType: ProviderType | null): Promise<string[]>;
    abstract connectAndSign(params: unknown[] | undefined, selectedProviderType: ProviderType | null): Promise<string[]>;
    protected abstract requestSign(requestArgs: RequestArguments): Promise<unknown>;
    request(requestArgs: RequestArguments): Promise<unknown>;
    protected isValidRequestParams(requestArgs: RequestArguments): boolean;
    abstract switchChain(chainId: string): Promise<void>;
    abstract disconnect(): Promise<void>;
    abstract shouldStoreConnectedAddressToStorage(): boolean;
}
