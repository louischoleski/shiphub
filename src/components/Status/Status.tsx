import React from 'react';
import { View, Text } from 'react-native';

import styles from './Status.styled';

export enum StatusTypes {
    NA = 'NA',
    PENDING = 'PENDING',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED',
    PICKED_UP = 'PICKED_UP',
    IN_TRANSIT = 'IN_TRANSIT',
    DROPPED_OFF = 'DROPPED_OFF',
    OUT_DELIVERY = 'OUT_DELIVERY',
    LABEL_CREATED = 'LABEL_CREATED',
    FACILITY_ARRIVAL = 'FACILITY_ARRIVAL',
    FACILITY_DEPARTURE = 'FACILITY_DEPARTURE',
}

/*
 * STATUS FLOW:
 *
 * 0. LABEL_CREATED, 1. PENDING,
 * 2. PICKED_UP, 3. FACILITY_DEPARTURE, 
 * 4. FACILITY_ARRIVAL, 5. IN_TRANSIT, 
 * 6. OUT_DELIVERY, 7. DELIVERED
 */

export interface IStatusProps {
    type?: StatusTypes;
}

const Status: React.FC<IStatusProps> = ({
    type = "PRIMARY",
}) => {
    const [containerTypeStyle, textTypeStyle] = React.useMemo(() => {
        const containerKey = `container_${type}`;
        const textKey = `text_${type}`;

        return [
            styles[containerKey],
            styles[textKey]
        ];
    }, [type]);

    const text = React.useMemo(() => {
        let res = null;

        switch (type) {
            case StatusTypes.PENDING:
                res = 'Pending';
                break;
            case StatusTypes.CANCELLED:
                res = 'Cancelled';
                break;
            case StatusTypes.PENDING:
                res = 'Pending';
                break;
            case StatusTypes.DELIVERED:
                res = 'Delivered';
                break;
            case StatusTypes.IN_TRANSIT:
                res = 'In-Transit';
                break;
            default:
                res = 'N/A';
        }

        return res;
    }, [type]);

    return (
        <View
            style={[
                styles.root,
                containerTypeStyle,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    textTypeStyle,
                ]}
            >
                {text}
            </Text>
        </View>
    );
};

export default Status;
