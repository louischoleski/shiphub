import { extractDate, isNewDay } from '../../utils';

export const DELIVERY_STATUSES = {
    NEW: 'NEW',
    FAILED: 'FAILED',
    TRANSIT: 'TRANSIT',
    CANCELLED: 'CANCELLED',
    CONFIRMED: 'CONFIRMED',
    COMPLETED: 'COMPLETED',
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

export const findNewDayIndex = (timestamps: number[] = []) => {
    if (!timestamps || !timestamps.length) return [];

    return timestamps.reduce((newDayIndexes, timestamp, index, arr) => {
        if (index > 0) {
            const previousDate = extractDate(arr[index - 1]);
            const currentDate = extractDate(timestamp);

            const hasNewDay = isNewDay(previousDate, currentDate);

            if (hasNewDay) {
                newDayIndexes.push(index);
            }
        }

        // Return the accumulated list of new day indexes
        return newDayIndexes;
    }, [0]);
};