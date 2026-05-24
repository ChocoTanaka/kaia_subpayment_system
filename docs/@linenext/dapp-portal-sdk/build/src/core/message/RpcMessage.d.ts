export interface SerializedKaiaRpcError {
    code: number;
    message: string;
    data?: unknown;
}
export interface RpcSuccessResponse {
    jsonrpc: string;
    id: string | null;
    result: unknown;
}
export interface RpcErrorResponse {
    jsonrpc: string;
    id: string | null;
    error: RpcErrorBody;
}
export interface RpcErrorBody {
    code: number;
    message: string;
    data?: unknown;
}
export type RpcResponse = RpcSuccessResponse | RpcErrorResponse;
export declare function isRpcErrorResponse(response: RpcResponse): response is RpcErrorResponse;
export declare function toJsonRpcResponse(response: unknown): RpcSuccessResponse;
