export interface EventDto {
    id: string;
    event_type: string;
    banner_setting: BannerSettingDto;
    event_utm_codes: EventUtmCode;
    starts_at: number;
    ends_at: number;
}
export interface BannerSettingDto {
    event_banner: EventBannerDto;
}
export interface EventBannerDto {
    banner_title: Record<string, string>;
    banner_type: string;
    banner_message: Record<string, string>;
    description: Record<string, string>;
    url: string;
    logo_url: string;
    banner_display_delay_seconds: number;
}
export interface EventConditionDto {
    type: string;
    value: string;
}
export interface EventUtmCode {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    referral_code: string;
}
