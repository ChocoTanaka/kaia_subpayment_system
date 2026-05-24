export declare enum ClickEventEmitterUiType {
    POPUP_BLOCKED = "POPUP_BLOCKED",
    PAYMENT_HISTORY_SIGN = "PAYMENT_HISTORY_SIGN",
    PAYMENT_HISTORY_OPEN = "PAYMENT_HISTORY_OPEN",
    ERC20_APPROVE = "ERC20_APPROVE",
    ERC20_APPROVE_RESULT = "ERC20_APPROVE_RESULT"
}
export declare const getClickEventEmitter: (type: ClickEventEmitterUiType) => string;
