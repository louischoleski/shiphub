// TODO: Deprecate demo helper.
export const getDemoTimestamp = (min: number = 0) => Date.now() - (min * 60 * 1000);

/**
 * Sorts an array of objects based on a specified key using a custom comparison function.
 * 
 * @param {any[]} inputArray - The array to be sorted.
 * @param {string} key - The key of the objects by which to sort.
 * @param {Function} compareFn - The comparison function used to compare the values.
 * 
 * @returns {any[]} The sorted array.
 */
export const sortArray = (
    inputArray: any[] = [],
    key: string = '',
    compareFn: (a: any, b: any) => number = (a, b) => b - a // Descending
): any[] => (
    inputArray.sort((a, b) => compareFn(a[key], b[key]))
);

export const hasObjectKey = (data = {}) =>
    Boolean(Object.keys(data || {}).length);

/**
 * Sort an array of objects by a specific key in ascending or descending order.
 *
 * @param {Array} array - The array of objects to be sorted.
 * @param {string} key - The key by which to sort the objects.
 * @param {string} order - The order of sorting ('asc' for ascending, 'desc' for descending).
 * @returns {Array} - The sorted array.
 */
export const sortByKey = (array: any[], key: string, order = 'asc') => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return order === 'asc' ? -1 : 1;
        }

        if (a[key] > b[key]) {
            return order === 'asc' ? 1 : -1;
        }

        return 0; // Equal values
    });
}

export const extractDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()); // Set the time to 00:00:00
};

export const isNewDay = (previousDate: Date, currentDate: Date): boolean => {
    // Create new Date objects that only include year, month, and day (set time to 00:00:00)
    const previousDay = new Date(previousDate.getFullYear(), previousDate.getMonth(), previousDate.getDate());
    const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

    // Return true if the current date is later than the previous date (i.e., it's a new day)
    return currentDay.toString() !== previousDay.toString();
};

export const isDayAgo = (timestamp: number, daysAgo: number = 0) => {
    const today = new Date();

    const targetDate = new Date(timestamp);
    const compareDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo);

    if (targetDate.toDateString() === compareDate.toDateString()) {
        return true;
    }

    return false;
}

export const formatRelativeTime = (timestamp: number) => {
    const now = Date.now();
    const millisecondsElapsed = now - timestamp;

    const secondsElapsed = Math.floor(millisecondsElapsed / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);
    const hoursElapsed = Math.floor(minutesElapsed / 60);
    const daysElapsed = Math.floor(hoursElapsed / 24);

    if (secondsElapsed < 60) {
        return "just now";
    }

    if (minutesElapsed < 60) {
        const minuteLabel = minutesElapsed === 1 ? "minute" : "minutes";
        return `${minutesElapsed} ${minuteLabel} ago`;
    }

    if (hoursElapsed < 24) {
        const hourLabel = hoursElapsed === 1 ? "hour" : "hours";
        return `${hoursElapsed} ${hourLabel} ago`;
    }

    if (daysElapsed === 1) {
        return "yesterday";
    }

    const dayLabel = daysElapsed === 1 ? "day" : "days";
    return `${daysElapsed} ${dayLabel} ago`;
}