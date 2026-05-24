import { SerializedKaiaRpcError } from '../core/message/RpcMessage';
export declare enum StandardErrorCodes {
    invalidRequest = "-32600",
    methodNotFound = "-32601",
    invalidParams = "-32602",
    internal = "-32603",
    parse = "-32700"
}
export declare const errorValues: {
    '-32600': {
        standard: string;
        message: string;
    };
    '-32601': {
        standard: string;
        message: string;
    };
    '-32602': {
        standard: string;
        message: string;
    };
    '-32603': {
        standard: string;
        message: string;
    };
    '-32700': {
        standard: string;
        message: string;
    };
};
export declare const ERROR_CODE_USER_CANCELED = -32001;
export declare const ERROR_CODE_PAYMENT_CANCELED = -31001;
export declare const ERROR_CODE_PAYMENT_FAILED = -31002;
export declare const ERROR_CODE_LINE_IAP_UNABLE = -31003;
export declare const ERROR_CODE_INVALID_FROM_ADDRESS = -32004;
export declare const ERROR_CODE_WALLET_TYPE_ENFORCEMENT_MISMATCH = -32007;
export declare const ERROR_CODE_KAIA_WALLET_EXTENSION_NOT_INSTALLED = -32008;
export declare const ERROR_CODE_FEE_DELEGATION_NONCE_TOO_LOW = -32009;
export declare class KaiaError extends Error {
    code: number;
    data?: any;
    constructor(code: string, message?: string, data?: any);
}
export declare class KaiaInternalError extends KaiaError {
    constructor(message?: string, data?: any);
}
export declare function serializeError(error: unknown): SerializedKaiaRpcError;
export interface LineIapError {
    code: string;
    message?: string;
}
export declare function isLineIapError(error: any): error is LineIapError;
