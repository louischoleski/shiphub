import React from 'react';
import moment from 'moment-timezone';

export const useDateFormatter = () => {
    /**
     * Converts a date input (epoch time or other valid date input) to a human-readable string with time zone support.
     * @param dateInput - Epoch time in seconds, ISO string, Date object, or other valid date input.
     * @param format - Desired format (e.g., "YYYY-MM-DD HH:mm:ss").
     * @param timeZone - Time zone (e.g., "America/New_York"). Defaults to UTC.
     * @returns Formatted date string.
     */
    const dateFormatter = React.useCallback(
        (
            dateInput: number | string | Date, 
            format: string = "YYYY-MM-DD HH:mm:ss", 
            timeZone: string = "UTC"
        ) => {
            const date = typeof dateInput === 'number'
                ? moment.unix(dateInput)    // Treat as epoch if number
                : moment(dateInput);        // Otherwise treat as a general date input
            
            return date.tz(timeZone).format(format);
        },
        []
    );

    return dateFormatter;
};

export default useDateFormatter;
