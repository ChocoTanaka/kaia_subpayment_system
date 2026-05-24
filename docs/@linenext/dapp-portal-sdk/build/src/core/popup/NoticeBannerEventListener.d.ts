import { NoticeDto } from '../dto/NoticeDto';
export declare class NoticeBannerEventListner {
    private iframes;
    private clickEvents;
    private cancelEvents;
    private eventListeners;
    setupListeners(noticeId: string): void;
    private clearListeners;
    reset(noticeId: string): void;
    openBanner(noticeId: string, notice: NoticeDto, clickEvent: () => void, closeEvent: () => void): Promise<void>;
}
