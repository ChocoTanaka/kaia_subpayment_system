export interface PaymentInfo {
    id: string;
    pgType: string;
    status: string;
    currencyCode: string;
    price: string;
    decimal: number;
    testMode: boolean;
    lineIapProductId?: string;
}
export interface CryptoApproveTxInfo {
    allowanceTxDTO: PaymentTxBody;
    approveTxDTO: PaymentTxBody;
    enableCryptoFeeDelegation: boolean;
}
export interface PaymentStatusResponse {
    status: string;
}
export interface StartPaymentResponse {
    redirectUrl?: string;
    paymentTxDTO?: PaymentTxBody;
    enableCryptoFeeDelegation: boolean;
    paymentIapInfoDTO?: PaymentIapInfoDTO;
}
export interface PaymentTxBody {
    to: string;
    value: string;
    input: string;
}
export interface PaymentIapInfoDTO {
    productId: string;
    orderId: string;
}
export interface SignTransactionResponse {
    raw: string;
}
export interface FeeDelegatedTransactionResponse {
    txHash: string;
}
