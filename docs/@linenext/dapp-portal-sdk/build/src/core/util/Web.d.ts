import { BannerType } from '../enum/BannerType';
export declare function openIFrame(url: string, width: string, height: string): HTMLIFrameElement;
export declare function openDimmedIFrame(url: string, width: string, height: string): HTMLIFrameElement;
export declare function openDimmedIFrameFromHtml(html: string, width: string, height: string): HTMLIFrameElement;
export declare function openIframeFromHtml(html: string, id: string, bannerType: BannerType): HTMLIFrameElement;
export declare function openNoticeIframeFromHtml(html: string, id: string): HTMLIFrameElement;
export declare function closeIFrame(): void;
export declare function closeIFrameByIdAndBannerType(id: string, bannerType: BannerType): void;
export declare function closeIFrameById(id: string): void;
