import React from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';

import { ScreenView } from '../../components';
import styles from './NotificationScreen.styled';
import { withPrivateNav } from '../../utils/hocs';
import { Illustration, Link, Typography } from '../../components';
import { sortByKey, isDayAgo, formatRelativeTime } from '../../utils';
import { DELIVERY_STATUS_ICONS, findNewDayIndex, getIconColor } from './NotificationScreen.controller';

const getDemoTimestamp = (min: number = 0) => Date.now() - (min * 60 * 1000);

const demoData = [
    // TODAY
    {
        id: "123",
        isRead: false,
        status: "NEW",
        timestamp: getDemoTimestamp(),
        description: "You have a new delivery assignment.",
    },
    {
        id: "345",
        isRead: false,
        status: "FAILED",
        timestamp: getDemoTimestamp(5),
        description: "Delivery attempt failed. Please attempt redelivery or contact support.",
    },
    {
        id: "678",
        isRead: false,
        status: "CANCELLED",
        timestamp: getDemoTimestamp(15),
        description: "The delivery has been cancelled.",
    },
    {
        id: "901",
        isRead: true,
        status: "TRANSIT",
        timestamp: getDemoTimestamp(18),
        description: "The package is on its way to the destination.",
    },
    {
        id: "234",
        isRead: true,
        status: "CONFIRMED",
        timestamp: getDemoTimestamp(25),
        description: "You have confirmed the delivery assignment.",
    },
    {
        id: "567",
        isRead: true,
        status: "COMPLETED",
        timestamp: getDemoTimestamp(35),
        description: "Delivery completed successfully.",
    },
    // YESTERDAY
    {
        id: "891",
        isRead: true,
        status: "TRANSIT",
        timestamp: getDemoTimestamp(1440),
        description: "The package is on its way to the destination.",
    },
    {
        id: "011",
        isRead: true,
        status: "CONFIRMED",
        timestamp: getDemoTimestamp(1440),
        description: "You have confirmed the delivery assignment.",
    },
    {
        id: "121",
        isRead: true,
        status: "COMPLETED",
        timestamp: getDemoTimestamp(1440),
        description: "Delivery completed successfully.",
    },
];

const NotificationScreen = () => {
    const data = React.useMemo(() => (
        sortByKey(demoData, 'timestamp', 'desc')
    ), [demoData]);

    const daysIdx = React.useMemo(() => (
        findNewDayIndex(data.map(({ timestamp }) => timestamp))
    ), [data]);

    const onBackPress = () => {
        // TODO
    }

    return (
        <ScreenView withHeader>
            <FlatList
                data={data}
                ItemSeparatorComponent={() => (
                    <View
                        style={styles.border}
                    />
                )}
                keyExtractor={({ id }) => id}
                renderItem={({ item, index }) => (
                    <React.Fragment>
                        {daysIdx.includes(index) && (
                            <View style={styles.headingContainer}>
                                <Typography.Heading as="h4">
                                    {isDayAgo(item.timestamp) ? 'Today' : (
                                        isDayAgo(item.timestamp, 1) ? 'Yesterday' : 'Old'
                                    )}
                                </Typography.Heading>
                                {isDayAgo(item.timestamp) ? (
                                    <Link style={styles.headingReadAll}>
                                        Mark all as read
                                    </Link>
                                ) : null}
                            </View>
                        )}
                        <TouchableOpacity
                            style={[
                                styles.iconWrapper,
                                !item.isRead ? styles.uneadItem : null
                            ]}
                        >
                            <View style={[styles.icon, item.isRead ? styles.borderedIcon : null]}>
                                <Illustration.Icon
                                    color={getIconColor(!item.isRead)}
                                    name={DELIVERY_STATUS_ICONS[item.status]}
                                />
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                                <Text style={styles.timestamp}>
                                    {formatRelativeTime(item.timestamp)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </React.Fragment>
                )}
            />
        </ScreenView>
    )
}

export default withPrivateNav(NotificationScreen);
