declare enum ProviderType {
    Google = "GOOGLE",
    Line = "LINE",
    Naver = "NAVER",
    Kakao = "KAKAO",
    Apple = "APPLE",
    Wechat = "WECHAT",
    Kaia = "KAIA",
    OKX = "OKX",
    BITGET = "BITGET"
}
export declare function isWebWallet(providerType: ProviderType): boolean;
export { ProviderType };
