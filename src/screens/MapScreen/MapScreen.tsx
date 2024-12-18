import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './MapScreen.styles';
import { withPrivateNav } from '../../utils/hocs';
import { ScreenView, Map, NavigateCard, RideOptionsCard } from '../../components';

const stackScreeOptions = {
	headerShown: false,
}

const MapScreen = () => {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();

    const handleMemuPress = () => navigation.navigate('DeliveryScreen');

    return (
        <ScreenView>
            <TouchableOpacity onPress={handleMemuPress} style={styles.menuCTA}>
                <Icon
                    type="ionicon"
                    color="black"
                    name="menu"
                    size={24}
                />
            </TouchableOpacity>
            <View style={styles.mapContainer}>
                <Map />
            </View>
            <View style={styles.mapListing}>
                <Stack.Navigator initialRouteName="NavigateCard">
                    <Stack.Screen 
                        name="NavigateCard"
                        component={NavigateCard}
                        options={stackScreeOptions}
                    />
                    <Stack.Screen 
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={stackScreeOptions}
                    />
                </Stack.Navigator>
            </View>
        </ScreenView>
    )
}

export default withPrivateNav(MapScreen);
