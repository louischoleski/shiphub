import React from 'react';
import { Alert, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Grid from '../Grid';
import Button from '../Button';
import Status from '../Status';
import InfoRow from './InfoRow';
import ProgressLog from './ProgressLog';
import Illustration from '../Illustration';
import styles from './DeliveryScreen.styled';
import { hasObjectKey } from './../../utils';
import { useDateFormatter, useCurrencyFormatter } from '../../utils/hooks';
import { parseETA, parseTime, getButtonCTA, parseCorrespondant, IDeliveryCardProps, DEFAULT_ETA_FORMAT, SUPPORTED_CTA_STATUSES } from './DeliveryCard.controller';

const dummyLog = [
    {
        id: '1',
        timestamp: 1733692861725,
        status: 'PICKED_UP',
    },
    {
        id: '2',
        timestamp: 1733694861725,
        status: 'IN_TRANSIT',
    },
    // {
    //     id: '3',
    //     timestamp: 1733892881725,
    //     status: 'DROPPED_OFF',
    // },
];

const DeliveryCard = ({
    data,
    isExpanded = false,
    showProgressTitle = false,
}: IDeliveryCardProps) => {
    const navigation = useNavigation();
    const dateFormatter = useDateFormatter();
    const currencyFormatter = useCurrencyFormatter('en-US', 'CAD');

    const showTime = React.useMemo(() => (
        isExpanded && hasObjectKey(data?.schedule)
    ), [isExpanded, data?.schedule]);

    const showSender = React.useMemo(() => (
        isExpanded && hasObjectKey(data?.sender)
    ), [isExpanded, data?.sender]);

    const hasReceiver = React.useMemo(() => (
        hasObjectKey(data?.receiver)
    ), [data?.receiver]);

    const onViewPressed = () => {
        navigation.navigate('DeliverySummaryScreen');
    };

    const onAcceptPressed = () => {
        Alert.alert(
            'Accept delivery', 
            `You’ve picked up delivery #${data?.id}. Ready to roll?`, [
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => navigation.navigate('DeliveryScreen')
            },
            {
                text: 'OK', 
                onPress: () => navigation.navigate('DeliveryScreen')
            },
        ]);
    };

    const onRefusedPressed = () => {
        Alert.alert(
            'Refuse delivery', 
            `You’ve passed on Delivery #${data?.id}. Maybe next time!`, [
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => navigation.navigate('DeliveryScreen')
            },
            {
                text: 'OK', 
                onPress: () => navigation.navigate('DeliveryScreen')
            },
        ]);
    };

    const deliveryETA = React.useMemo(() => (
        parseETA(data?.schedule, dateFormatter)
    ), [data.schedule]);

    const [showCTA, refuseCTA, acceptCTA] = React.useMemo(() => {
        const isCTAVisible = isExpanded && SUPPORTED_CTA_STATUSES.includes(data.status);
        const [refuse, accept] = getButtonCTA(data.status);

        return [isCTAVisible, refuse, accept];
    }, [data.status, isExpanded]);

    return (
        <View style={[styles.root, !isExpanded && styles.bordered]}>
            <View style={styles.header}>
                <View style={styles.shipmentHeader}>
                    {!isExpanded && (
                        <View style={styles.iconContainer}>
                            <Illustration.Icon
                                name="delivery"
                            />
                        </View>
                    )}
                    <View style={styles.shipmentNumber}>
                        <Text style={styles.shipmentHeaderSubtitle}>
                            {isExpanded ? (
                                'Estimated Time of Arrival'
                            ) : (
                                'Shipment Number'
                            )}
                        </Text>
                        <Text style={[styles.shipmentHeaderId, styles.boldText]}>
                            {isExpanded ? (
                                deliveryETA
                            ) : data.id}
                        </Text>
                    </View>
                </View>
                <View style={styles.shipmentStatus}>
                    <Status
                        type={data.status}
                    />
                </View>
            </View>

            <View style={styles.divider} />

            {!isExpanded && (
                <View style={styles.shipmentLocation}>
                    <Text style={styles.locationFrom}>
                        {data.from}
                    </Text>
                    <Illustration.Icon
                        name="arrow_forward"
                    />
                    <Text style={styles.locationTo}>
                        {data.to}
                    </Text>
                </View>
            )}

            {isExpanded && (
                <ProgressLog 
                    data={dummyLog}
                    showTitle={showProgressTitle}
                />
            )}

            {showTime && (
                <InfoRow
                    type="TIME"
                    data={parseTime(data?.schedule, dateFormatter)}
                />
            )}

            {showSender && (
                <InfoRow
                    type="SENDER"
                    data={parseCorrespondant(data?.sender)}
                />
            )}

            {hasReceiver && (
                <InfoRow
                    type="RECEIVER"
                    data={parseCorrespondant(data?.receiver)}
                />
            )}

            <Grid cols={2}>
                <Text style={[styles.infoPricing, styles.textAlignLeft]}>
                    Delivery Fee
                </Text>
                <Text style={[styles.infoPricing, styles.textAlignRight]}>
                    {currencyFormatter(data.feeAmount)}
                </Text>
            </Grid>

            {showCTA && (
                <>
                    <Grid cols={2}>
                        <Button
                            type="DANGER"
                            text={refuseCTA}
                            onPress={onRefusedPressed}
                        />
                        <Button
                            type="SUCCESS"
                            text={acceptCTA}
                            onPress={onAcceptPressed}
                        />
                    </Grid>
                </>
            )}

            {!isExpanded && (
                <Grid cols={1}>
                    <Button
                        text="VIEW DETAILS"
                        onPress={onViewPressed}
                    />
                </Grid>
            )}
        </View>
    );
};

export default DeliveryCard;
