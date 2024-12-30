import React from 'react';
import { FlatList, View } from 'react-native';

import styles from './DashboardScreen.styled';
import { withPrivateNav } from '../../utils/hocs';
import { findNewDayIndex } from './DashboardScreen.controller';
import { sortByKey, isDayAgo, getDemoTimestamp } from '../../utils';
import { ScreenView, DeliveryCard, Typography } from '../../components';

const demoData = [
    // TODAY
    {
        id: 'GH2315WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: false,
        status: 'PENDING',
        feeAmount: 3485.23,
        from: 'Toril, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(),
            arrivalEnd: getDemoTimestamp(240),
            arrivalStart: getDemoTimestamp(),
        },
        timestamp: getDemoTimestamp(),
        description: 'You have a new delivery assignment.',
    },
    {
        id: 'PH2305WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: false,
        status: 'IN_TRANSIT',
        feeAmount: 1500.00,
        from: 'Ecoland, Davao City',
        to: 'Marfori, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(5),
            arrivalEnd: getDemoTimestamp(245),
            arrivalStart: getDemoTimestamp(5),
        },
        timestamp: getDemoTimestamp(5),
        description: 'Delivery attempt failed. Please attempt redelivery or contact support.',
    },
    {
        id: 'TR2395WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: false,
        status: 'IN_TRANSIT',
        feeAmount: 15000.00,
        from: 'Ulas, Davao City',
        to: 'Matina, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(15),
            arrivalEnd: getDemoTimestamp(255),
            arrivalStart: getDemoTimestamp(15),
        },
        timestamp: getDemoTimestamp(15),
        description: 'The delivery has been cancelled.',
    },
    {
        id: 'LG2315WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'DELIVERED',
        feeAmount: 500.00,
        from: 'Matina, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(18),
            arrivalEnd: getDemoTimestamp(258),
            arrivalStart: getDemoTimestamp(18),
        },
        timestamp: getDemoTimestamp(18),
        description: 'The package is on its way to the destination.',
    },
    {
        id: 'PH2335WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'PENDING',
        feeAmount: 1000.00,
        from: 'Ecoland, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(25),
            arrivalEnd: getDemoTimestamp(265),
            arrivalStart: getDemoTimestamp(25),
        },
        timestamp: getDemoTimestamp(25),
        description: 'You have confirmed the delivery assignment.',
    },
    {
        id: 'VR2395WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'PENDING',
        feeAmount: 3000.00,
        from: 'Panacan, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(35),
            arrivalEnd: getDemoTimestamp(275),
            arrivalStart: getDemoTimestamp(35),
        },
        timestamp: getDemoTimestamp(35),
        description: 'Delivery completed successfully.',
    },
    // YESTERDAY
    {
        id: 'AH2315WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'PENDING',
        feeAmount: 485.23,
        from: 'Ecoland, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Shaina',
            lastName: 'Gomez',
        },
        schedule: {
            departure: getDemoTimestamp(1440),
            arrivalEnd: getDemoTimestamp(1680),
            arrivalStart: getDemoTimestamp(1440),
        },
        timestamp: getDemoTimestamp(1440),
        description: 'The package is on its way to the destination.',
    },
    {
        id: 'FH2395WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'CANCELLED',
        feeAmount: 1455.00,
        from: 'Ecoland, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Paul',
            lastName: 'Cortez',
        },
        schedule: {
            departure: getDemoTimestamp(1440),
            arrivalEnd: getDemoTimestamp(1680),
            arrivalStart: getDemoTimestamp(1440),
        },
        timestamp: getDemoTimestamp(1440),
        description: 'You have confirmed the delivery assignment.',
    },
    {
        id: 'AH2346WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: true,
        status: 'CANCELLED',
        feeAmount: 2400.00,
        from: 'Ecoland, Davao City',
        to: 'Ulas, Davao City',
        sender: {
            id: '09863162371',
            firstName: 'John',
            lastName: 'Doe',
        },
        receiver: {
            id: '09863162371',
            firstName: 'Kenneth',
            lastName: 'Melendez',
        },
        schedule: {
            departure: getDemoTimestamp(1440),
            arrivalEnd: getDemoTimestamp(1680),
            arrivalStart: getDemoTimestamp(1440),
        },
        timestamp: getDemoTimestamp(1440),
        description: 'Delivery completed successfully.',
    },
];

const DashboardScreen = () => {
    const data = React.useMemo(() => (
        sortByKey(demoData, 'timestamp', 'desc')
    ), [demoData]);

    const daysIdx = React.useMemo(() => (
        findNewDayIndex(data.map(({ timestamp }) => timestamp))
    ), [data]);

    return (
        <ScreenView withHeader>
            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <DeliveryCard 
                        key={item.id}
                        data={item}
                        // isExpanded
                    />
                )}
            />
        </ScreenView>
    )
}

export default withPrivateNav(DashboardScreen);
