import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import styles from './../../ReportScreen.styled';
import { sortByKey, getDemoTimestamp } from '../../../../utils';
import { DEFAULT_FILTERS, DEFAULT_REPORT_SECTIONS, SupportedFilters } from './../../ReportScreen.controller';
import { DeliveryCard, Typography, Grid, Input, Button, NavPill, Illustration } from '../../../../components';

const demoData = [
    // TODAY
    {
        id: 'GH2315WX56',
        weight: 0,
        category: 'PACKAGE',
        isRead: false,
        status: 'DELIVERED',
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
        status: 'CANCELLED',
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
        status: 'DELIVERED',
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
        status: 'DELIVERED',
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
        status: 'DELIVERED',
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
];

const ReportMainSection = ({ onSectionPress }) => {
    const [data, setData] = React.useState({ query: '' });
    const [activeFilter, setActiveFilter] = React.useState<string>(SupportedFilters.ALL);

    const options = React.useMemo(() => {
        const sortedData = sortByKey(demoData, 'timestamp', 'desc');

        if (activeFilter === SupportedFilters.ALL) {
            return sortedData;
        }

        return sortedData.filter(({ status }) => status === activeFilter);
    }, [demoData, activeFilter]);

    const onChangeValue = (value: string, key?: string) => {
        if (!key || !key.length) return;

        setData({ ...data, [key]: value });
    }

    const onSelectDatePressed = () => {
        onSectionPress(DEFAULT_REPORT_SECTIONS.DATE);
    }

    const dateSelection = (
        <TouchableOpacity
            onPress={onSelectDatePressed}
            style={styles.dateWrapper}
        >
            <Text style={styles.dateTxt}>
                Select Dates
            </Text>
            <View style={styles.navIcon}>
                <Illustration.Icon
                    width={19}
                    name="calendar"
                    color="#007BFF"
                />
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={styles.headingContainer}>
                <Typography.Heading as="h4">
                    Reports
                </Typography.Heading>
            </View>

            <View style={styles.searchFilters}>
                <Grid cols={1}>
                    <Input
                        name="query"
                        type="SEARCH"
                        value={data.query}
                        setValue={onChangeValue}
                        placeholder="Search shipment number"
                    />
                </Grid>
                <Grid cols={1}>
                    <View style={styles.info}>
                        <View style={styles.infoLeft}>
                            <Text>
                                Recent Deliveries
                            </Text>
                        </View>
                        <View style={styles.infoRight}>
                            <Button
                                size="sm"
                                type="SECONDARY"
                                text={dateSelection}
                                onPress={onSelectDatePressed}
                            />
                        </View>
                    </View>
                </Grid>
                <Grid cols={1}>
                    <View style={styles.filters}>
                        <NavPill
                            options={DEFAULT_FILTERS}
                            currentItem={activeFilter}
                            onChange={setActiveFilter}
                        />
                    </View>
                </Grid>
            </View>

            <FlatList
                data={options}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <DeliveryCard
                        key={item.id}
                        data={item}
                        // isExpanded
                    />
                )}
            />
        </>
    )
}

export default ReportMainSection;
