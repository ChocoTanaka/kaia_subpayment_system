import { DappPortalSDKConfig } from '../config/config';
import { CryptoApproveTxInfo, FeeDelegatedTransactionResponse, PaymentInfo, StartPaymentResponse } from '../message/PaymentMessage';
export declare class PaymentClient {
    private readonly baseUrl;
    private readonly maxRetryCount;
    private readonly clientId;
    constructor(config: DappPortalSDKConfig);
    getPayment: (paymentId: string) => Promise<PaymentInfo>;
    getCryptoApproveTxInfo: (paymentId: string) => Promise<CryptoApproveTxInfo>;
    waitForConfirm: (paymentId: string) => Promise<void>;
    private delayPolling;
    private getPaymentStatus;
    register: (paymentId: string, txHash: string) => Promise<void>;
    cancelCryptoPayment: (paymentId: string) => Promise<string>;
    cancelLineIapPayment: (paymentId: string) => Promise<string>;
    startPayment: (paymentId: string, userAgent: string, isLiff: boolean, lineChannelId?: string | null, lineAccessToken?: string | null, lineIapProductId?: string | null, lineIapPaymentPrice?: string | null, lineIapPaymentCurrency?: string | null, liffOs?: string | null) => Promise<StartPaymentResponse>;
    getNonceForPaymentHistory: (walletAddress: string) => Promise<string>;
    getSessionTokenForPaymentHistory: (walletAddress: string, signature: string) => Promise<string>;
    signTransactionAsFeePayer: (paymentId: string, userSignedRawTransaction: string) => Promise<FeeDelegatedTransactionResponse>;
}
