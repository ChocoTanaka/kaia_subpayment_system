export default class SdkCookieStorage {
    private readonly domains;
    constructor(domains: string[]);
    getTrackingId(): string | null;
    setTrackingId(trackingId: string): void;
    private setItem;
    private getItem;
    private removeItem;
}
