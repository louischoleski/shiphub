import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';

import { sortByKey } from '../../utils';
import styles from './DashboardScreen.styled';
import { withPrivateNav } from '../../utils/hocs';
import { demoData } from './DashboardScreen.controller';
import { ScreenView, DeliveryCard, Tab, Illustration } from '../../components';

const DEFAULT_TABS = [
    { key: 'IN_TRANSIT', component: <Text>In-Transit</Text> },
    { key: 'INCOMING', component: <Text>Incoming</Text> },
];

const DashboardScreen = () => {
    const [activeTab, setActiveTab ] = React.useState('IN_TRANSIT');

    const data = React.useMemo(() => (
        sortByKey(demoData, 'timestamp', 'desc')
    ), [demoData]);

    const options = React.useMemo(() => {

    }, []);

    return (
        <ScreenView withHeader>
            <TouchableOpacity
                style={styles.currentLocationIconWrapper}
            >
                <View style={styles.currentLocationIcon}>
                    <Illustration.Icon
                        color="#007BFF"
                        name="person_pin"
                    />
                </View>
                <View style={styles.currentLocationInfo}>
                    <Text style={styles.currentLocationTimestamp}>
                        Location
                    </Text>
                    <Text style={styles.currentLocationDescription}>
                        Agton Streets, Corner De Guzman St, Toril, Davao City, 8000 Davao del Sur
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.tabWrapper}>
                <Tab 
                    options={DEFAULT_TABS}
                    defaultTab="IN_TRANSIT"
                    onTabSelect={setActiveTab}
                />
            </View>

            <FlatList
                data={data}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <DeliveryCard
                        data={item}
                        key={item.id}
                        // isExpanded
                    />
                )}
            />
        </ScreenView>
    )
}

export default withPrivateNav(DashboardScreen);
