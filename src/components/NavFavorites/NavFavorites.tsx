import React from 'react';
import { Icon } from 'react-native-elements';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';

import styles from './NavFavorites.styled';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "357 6e av laval",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "8520 Bloombield, Montreal",
    },
];

const NavFavorites = () => {
    return (
        <FlatList
            data={data}
            ItemSeparatorComponent={() => (
                <View 
                    style={styles.favBorder}
                />
            )}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.favIconWrapper}>
                    <Icon
                        style={styles.favIcon}
                        name={item.icon}
                        type="ionicon"
                        color="white"
                        size={10}
                    />
                    <View>
                        <Text style={styles.favLocation}>
                            {item.location}
                        </Text>
                        <Text style={styles.favDestination}>
                            {item.destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavorites;
