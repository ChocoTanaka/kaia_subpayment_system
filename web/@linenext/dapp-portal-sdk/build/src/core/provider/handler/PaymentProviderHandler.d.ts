import { PaymentClient } from '../../client/PaymentClient';
import { DappPortalSDKConfig } from '../../config/config';
import { CryptoApproveTxInfo, FeeDelegatedTransactionResponse, PaymentInfo } from '../../message/PaymentMessage';
export declare class PaymentProviderHandler {
    protected readonly paymentClient: PaymentClient;
    constructor(config: DappPortalSDKConfig);
    getPayment(paymentId: string): Promise<PaymentInfo>;
    getCryptoApproveTxInfo(paymentId: string): Promise<CryptoApproveTxInfo>;
    cancelCryptoPayment(paymentId: string): Promise<string>;
    cancelLineIapPayment(paymentId: string): Promise<string>;
    startPayment(paymentId: string, lineChannelId?: string | null, lineAccessToken?: string | null, lineIapProductId?: string | null, lineIapPaymentPrice?: string | null, lineIapPaymentCurrency?: string | null, liffOs?: string | null): Promise<unknown>;
    waitForConfirm(paymentId: string): Promise<void>;
    registerTxHash(paymentId: string, txHash: string): Promise<void>;
    openStripePaymentPage(url: string, width: number, height: number): Window | undefined | null;
    getNonceForPaymentHistory(walletAddress: string): Promise<string>;
    getSessionTokenForPaymentHistory(walletAddress: string, signature: string): Promise<string>;
    signTransactionAsFeePayer(paymentId: string, userSignedRawTransaction: string): Promise<FeeDelegatedTransactionResponse>;
}
