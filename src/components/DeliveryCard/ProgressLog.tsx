import React from 'react';
import { FlatList, Text, View } from 'react-native';

import {
    IProgressLog,
    DEFAULT_ETA_FORMAT,
    DEFAULT_DATE_FORMAT,
    getProgressStatusIcon,
    getProgressStatusDescription,
} from './DeliveryCard.controller';
import { sortArray } from '../../utils';
import Illustration from '../Illustration';
import styles from './DeliveryScreen.styled';
import { useDateFormatter } from '../../utils/hooks';

const ProgressLog = ({
    data = [],
    showTitle = false,
}: { showTitle?: boolean; data: IProgressLog[] }) => {
    const dateFormatter = useDateFormatter();

    return (
        <>
            {showTitle && (
                <View style={styles.progressHeader}>
                    <Text style={styles.progressTitle}>
                        Status
                    </Text>
                </View>
            )}
            <View style={styles.progressWrapper}>
                <FlatList
                    data={sortArray(data, 'timestamp')}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <View style={styles.progressItem}>
                            <View style={styles.progressItemTimestamp}>
                                <Text style={styles.lightGray}>
                                    {dateFormatter(item?.timestamp, DEFAULT_DATE_FORMAT)}
                                </Text>
                                <Text style={styles.lightGray}>
                                    {dateFormatter(item?.timestamp, DEFAULT_ETA_FORMAT)}
                                </Text>
                            </View>
                            <View style={styles.progressIconWrapper}>
                                <View style={styles.progressDivider} />
                                <View style={styles.progressCircleDivider} />
                                <View style={styles.progressIcon}>
                                    <Illustration.Icon
                                        name={getProgressStatusIcon(item.status)}
                                        color="white"
                                    />
                                </View>
                            </View>
                            <Text style={styles.progressDescription}>
                                {getProgressStatusDescription(item.status)}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </>
    );
};

export default ProgressLog;
