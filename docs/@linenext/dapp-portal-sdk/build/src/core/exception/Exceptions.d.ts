import { RpcErrorBody } from '../message/RpcMessage';
export declare class RpcException extends Error {
    code: number;
    data?: unknown;
    constructor(rpcError: RpcErrorBody);
}
