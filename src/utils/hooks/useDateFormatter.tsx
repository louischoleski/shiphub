import React from 'react';
import moment from 'moment-timezone';

export const useDateFormatter = () => {
    /**
     * Converts an epoch time to a human-readable string with time zone support.
     * @param epoch - Epoch time in seconds.
     * @param format - Desired format (e.g., "YYYY-MM-DD HH:mm:ss").
     * @param timeZone - Time zone (e.g., "America/New_York"). Defaults to UTC.
     * @returns Formatted date string.
     */
    const dateFormatter = React.useCallback(
        (epoch: number, format: string = "YYYY-MM-DD HH:mm:ss", timeZone: string = "UTC") => {
            return moment.unix(epoch).tz(timeZone).format(format);
        },
        []
    );

    return dateFormatter;
};

export default useDateFormatter;