import { EventClient } from '../../client/EventClient';
import { DappPortalSDKConfig } from '../../config/config';
import { EventDto } from '../../dto/EventDto';
export declare class EventHandler {
    protected readonly eventClient: EventClient;
    constructor(config: DappPortalSDKConfig);
    getEventWhenStart(): Promise<EventDto[]>;
    getEventWhenConnect(): Promise<EventDto[]>;
    setEventUserConnection(eventId: string, connectionToken: string, walletAddress: string): Promise<void>;
    validateSubMissionCompletion(eventId: string, subMissionIndex: string, walletAddress: string): Promise<boolean>;
}
