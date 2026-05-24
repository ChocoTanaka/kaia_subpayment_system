export interface ExtensionErrorResponse {
    code: number;
    message: string;
}
export declare function isExtensionErrorResponse(err: any): err is ExtensionErrorResponse;
