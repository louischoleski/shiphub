import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
    getIconColor,
    getItemColor,
    DEFAULT_TABS,
    SUPPORTED_NAV_SCREENS,
} from './NavigationBar.controller';
import Illustration from '../Illustration';
import styles from './NavigationBar.styled';

const NavigationBar = ({ currentScreen }) => {
    const navigation = useNavigation();
    const { bottom } = useSafeAreaInsets();

    const showNavigationBar = React.useMemo(() => (
        SUPPORTED_NAV_SCREENS.includes(currentScreen)
    ), [currentScreen]);

    const handleMenuPress = (itemScreen: string) => {
        navigation.navigate(itemScreen);
    }

    if (!showNavigationBar) return;

    return (
        <View style={styles.rootView}>
            <View
                style={[
                    styles.tabBarView,
                    { height: 80 + (bottom > 0 ? 10 : 0) },
                ]}
            >
                {DEFAULT_TABS.map((item) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={item.navScreen}
                        style={styles.navCTA}
                        onPress={() => handleMenuPress(item.navScreen)}
                    >
                        <View style={styles.navIcon}>
                            <Illustration.Icon
                                name={item.icon}
                                color={getIconColor(item.navScreen, currentScreen)}
                            />
                        </View>
                        <Text style={[
                            styles.iconText, 
                            getItemColor(item.navScreen, currentScreen)
                        ]}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default NavigationBar;
