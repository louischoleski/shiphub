export enum BadgeType {
    INFO = 'INFO',
    DARK = 'DARK',
    LIGHT = 'LIGHT',
    DANGER = 'DANGER',
    WARNING = 'WARNING',
    PRIMARY = 'PRIMARY',
    SUCCESS = 'SUCCESS',
    SECONDARY = 'SECONDARY',
}

export interface IBadgeProps {
    type: BadgeType;
    round?: boolean;
    children: React.ReactNode;
};
