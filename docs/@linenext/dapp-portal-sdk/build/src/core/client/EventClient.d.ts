import { DappPortalSDKConfig } from '../config/config';
import { EventDto } from '../dto/EventDto';
export declare class EventClient {
    private readonly baseUrl;
    private readonly clientId;
    constructor(config: DappPortalSDKConfig);
    getEvents: (bannerTiming: string) => Promise<EventDto[]>;
    setEventUserConnection: (eventId: string, connectionToken: string, walletAddress: string) => Promise<void>;
    validateSubMissionCompletion: (eventId: string, subMissionIndex: string, walletAddress: string) => Promise<void>;
}
