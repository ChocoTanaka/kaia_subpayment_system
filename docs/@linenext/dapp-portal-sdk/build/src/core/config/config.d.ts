export type DappPortalSDKClientConfig = {
    clientId: string;
    chainId?: string;
    chainNodeRpcEndpoint?: string;
    sdkBaseUrl?: string;
    connectPageOptions?: Record<string, string>;
};
export type KaiaWalletMobileConfig = {
    iosAppId: string;
    androidPackageName: string;
    appleBundleId: string;
    urlScheme: string;
};
export type LiffWalletConfig = {
    baseUrl: {
        compact: string;
        tall: string;
        full: string;
    };
    defaultLiffType: 'compact' | 'tall' | 'full';
    liffTypeByRequestMethod: {
        [key: string]: 'compact' | 'tall' | 'full';
    };
};
type Erc20TokenInfo = {
    name: string;
    imageUrl: string;
};
type Erc20Tokens = {
    [address: string]: Erc20TokenInfo;
};
export type Erc20TokenMap = {
    erc20Tokens: Erc20Tokens;
};
export type DappPortalSDKConfig = {
    clientId: string;
    chainId: string;
    connectPageOptions?: Record<string, string>;
    sdkUIUrls: {
        walletSelect: string;
        mobileWalletBridge: string;
        browserGuide: string;
        miniDappConnectWeb: string;
        miniDappConnectLiff: string;
        miniDappConnectWebV2: string;
        miniDappConnectWebV3: string;
        miniDappConnectLiffV2: string;
        miniDappConnectLiffV3: string;
    };
    relayServerConfig: {
        baseUrl: string;
        relaySessionTimeout: number;
        maxRetryCount: number;
    };
    paymentServerConfig: {
        baseUrl: string;
        maxRetryCount: number;
    };
    metricServerConfig: {
        baseUrl: string;
        utmParamKeys: string[];
    };
    stripePopupSize: {
        width: number;
        height: number;
    };
    paymentHistoryPopupConfig: {
        webUrl: string;
        liffUrl: string;
        popupSize: {
            width: number;
            height: number;
        };
    };
    tokenApprovalUIUrls: {
        requestApprove: string;
        approveResult: string;
    };
    trackingModuleConfig: {
        cookieDomains: string[];
    };
    liffWalletConfig: LiffWalletConfig;
    kaiaWalletMobileConfig: KaiaWalletMobileConfig;
    chainNodeRpcEndpoint: string;
    webWalletConfig: {
        baseUrl: string;
        popupSize: {
            width: number;
            height: number;
        };
    };
    walletHandledMethods: string[];
    kaiaOnlyMethods: string[];
    methodsShouldSyncChain: string[];
    feeDelegatedTxTypes: number[];
    methodsShouldAttachTxTypeParamsWhenRequestToExtension: string[];
    methodsShouldConvertInputFieldToDataFieldWhenRequestToExtension: string[];
    txTypesShouldConvertInputFieldToDataFieldWhenRequestToExtension: number[];
    blockedMethods: {
        [key: string]: object;
    };
    blockedBrowsersUserAgent: {
        [name: string]: string[];
    };
    erc20Tokens: Erc20TokenMap;
    isSupportedVersion: boolean;
    unifiPaymentDefaultGasLimit: string;
    isUnifiDeployed: boolean;
};
export declare function buildDappPortalSDKConfig(clientConfig: DappPortalSDKClientConfig): Promise<DappPortalSDKConfig>;
export {};
