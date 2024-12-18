import tw from 'twrnc';
import React from 'react';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

import styles from './RideOptionsCard.styled';
import { selectNavTime } from '../../store/selectors/nav';

const SURGE_CHARGE_RATE = 1.5;

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn',
    },
    {
        id: 'Uber-XL-456',
        title: 'UberXL',
        multiplier: 1.5,
        image: 'https://links.papareact.com/5w8',
    },
    {
        id: 'Uber-LUX-789',
        title: 'UberLUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf',
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const travelInfo = useSelector(selectNavTime);
    const [selected, setSelected] = React.useState(null);

    const getTravelPrice = (multiplier: number) => new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD'
    }).format(
        (travelInfo?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('NavigateCard') }
                    style={styles.backNavCTA}
                >
                    <Icon
                        size={16}
                        color="black"
                        name="chevron-left"
                        type="font-awesome"
                    />
                </TouchableOpacity>
                <Text style={styles.header}>
                    Select a Ride {travelInfo ? `- ${travelInfo?.distance.text}` : null}
                </Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={[styles.itemWrapper, (selected?.id === item.id ? styles.innactiveItem : null)]}>
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.itemInfoWrapper}>
                            <Text style={styles.itemInfoTitle}>
                                {item.title}
                            </Text>
                            <Text>
                                {travelInfo?.duration.text} Travel time
                            </Text>
                        </View>
                        <Text style={styles.itemInfoPrice}>
                            {getTravelPrice(item.multiplier)}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.chooseCTAWrapper}>
                <TouchableOpacity 
                    disabled={!selected}
                    style={[styles.chooseCTA, (!selected ? styles.innactiveChooseCTA : null)]}
                >
                    <Text style={styles.chooseCTAText}>
                        Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default RideOptionsCard;
