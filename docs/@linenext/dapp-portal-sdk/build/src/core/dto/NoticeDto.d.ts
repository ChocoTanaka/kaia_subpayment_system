export interface NoticeDto {
    id: string;
    banner_display_until: BannerDisplayUntil;
    banner_display_timing: BannerDisplayTiming;
    banner_zindex: string;
    banner_logo_url: string;
    banner_message: Record<string, string>;
    banner_on_click?: BannerOnClick;
    banner_display_delay_seconds: number;
    notice_utm_code: NoticeUtmCode;
    banner_banned_country_codes: string[];
    banner_excluded_client_ids: string[];
    banner_starts_at?: string | null;
    banner_ends_at?: string | null;
}
export declare enum BannerDisplayUntil {
    ALWAYS = "ALWAYS",
    UNTIL_READ = "UNTIL_READ",
    ONCE = "ONCE"
}
export declare enum BannerDisplayTiming {
    SDK_INIT = "SDK_INIT",
    CONNECT = "CONNECT"
}
export interface BannerOnClick {
    liff: LiffOnClick;
    web: WebOnClick;
}
export interface LiffOnClick {
    action: LiffOnClickAction;
    url: string;
}
export interface WebOnClick {
    action: WebOnClickAction;
    url: string;
}
export declare enum LiffOnClickAction {
    NONE = "NONE",
    OPEN_SUB_LIFF = "OPEN_SUB_LIFF",
    OPEN_EXTERNAL_BROWSER = "OPEN_EXTERNAL_BROWSER",
    REDIRECT_LIFF = "REDIRECT_LIFF"
}
export declare enum WebOnClickAction {
    NONE = "NONE",
    OPEN_NEW_TAB = "OPEN_NEW_TAB",
    REDIRECT_PAGE = "REDIRECT_PAGE"
}
export interface NoticeUtmCode {
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmTerm: string;
    utmContent: string;
    referralCode: string;
}
