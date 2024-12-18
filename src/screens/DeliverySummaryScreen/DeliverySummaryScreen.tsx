import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getDemoTimestamp } from '../../utils';
import { withPrivateNav } from '../../utils/hocs';
import styles from './DeliverySummaryScreen.styles';
import { ScreenView, Map, DeliveryCard, Illustration, BottomSheet } from '../../components';

const DEFAULT_LOCATION = {
    description: 'Montreal, QC',
    location: {
        lat: 45.5286825,
        lng: -73.6746388,
    }
};

const demoData = {
    id: 'FH2395WX56',
    isRead: true,
    status: 'IN_TRANSIT',
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
};

const DeliverySummaryScreen = () => {
    const navigation = useNavigation();

    const [origin, setOrigin] = React.useState(DEFAULT_LOCATION);
    const [destination, setDestination] = React.useState(DEFAULT_LOCATION);

    const handleMemuPress = () => navigation.navigate('DeliveryScreen');

    return (
        <ScreenView withoutSafeView>
            <TouchableOpacity onPress={handleMemuPress} style={styles.menuCTA}>
                <Illustration.Icon
                    name="arrow_back"
                    color="white"
                />
            </TouchableOpacity>
            <View style={styles.mapContainer}>
                <Map
                    origin={origin}
                    destination={destination}
                />
            </View>
            <BottomSheet visible withoutOverlay>
                <DeliveryCard
                    showProgressTitle
                    data={demoData}
                    isExpanded
                />
            </BottomSheet>
            {/* <View style={styles.mapListing}>
            </View> */}
        </ScreenView>
    )
}

export default withPrivateNav(DeliverySummaryScreen);
