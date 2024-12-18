import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity, Text, View, Image } from 'react-native';

import styles from './NavOptions.styled';
import { selectNavOrigin } from '../../store/selectors/nav';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
];

const NavOptions = () => {
    const navigation = useNavigation();

    const origin = useSelector(selectNavOrigin);

    const handlePress = (screenName: string) => navigation.navigate(screenName);

    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    disabled={!origin}
                    style={styles.listItem}
                    onPress={() => handlePress(item.screen)}
                >
                    <View style={!origin && styles.disabledCTA}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.image }}
                        />
                        <Text style={styles.itemTitle}>
                            {item.title}
                        </Text>
                        <Icon
                            color="white"
                            type="antdesign"
                            name="arrowright"
                            style={styles.iconArrow}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions;
