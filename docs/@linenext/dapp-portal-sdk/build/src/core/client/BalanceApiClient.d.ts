export declare class BalanceApiClient {
    private readonly baseUrl;
    constructor(baseUrl: string);
    getErc20BalanceWithDeposited: (walletType: string, walletAddress: string, contractAddress: string, chainId: string) => Promise<{
        balance: string;
    }>;
}
