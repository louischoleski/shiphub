export const DELIVERY_STATUSES = {
    NEW: 'NEW',
    FAILED: 'FAILED',
    TRANSIT: 'TRANSIT',
    CANCELLED: 'CANCELLED',
    CONFIRMED: 'CONFIRMED',
    COMPLETED: 'COMPLETED',
}

export enum SupportedFilters {
    ALL = 'ALL',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED',
    UNSUCCESSFUL = 'UNSUCCESSFUL',
}

export const DEFAULT_FILTERS = (
    Object.keys(SupportedFilters)
        .sort((a, b) => a.localeCompare(b))
        .map((key) => ({
            key,
            name: key,
        }))
);

export const DEFAULT_REPORT_SECTIONS = {
    MAIN: 'MAIN',
    DATE: 'DATE',
    REPORT: 'REPORT',
}

export const DELIVERY_STATUS_ICONS = {
    [DELIVERY_STATUSES.NEW]: 'deployed_code_account',
    [DELIVERY_STATUSES.FAILED]: 'deployed_code_alert',
    [DELIVERY_STATUSES.TRANSIT]: 'shipping',
    [DELIVERY_STATUSES.CANCELLED]: 'disabled',
    [DELIVERY_STATUSES.CONFIRMED]: 'package',
    [DELIVERY_STATUSES.COMPLETED]: 'inventory',
}

export const getIconColor = (activeItem: boolean) => (
    activeItem ? '#007BFF' : null
);
