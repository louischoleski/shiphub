import React from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import config from '../../config';
import NavFavorites from '../NavFavorites';
import styles from './NavigateCard.styled';
import { setNavDestination } from '../../store/actions/nav';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const handleLocationPress = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
        if (!details) return;

        dispatch(setNavDestination({
            location: details?.geometry.location, 
            description: data.description
        }));

        navigation.navigate("RideOptionsCard");
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>
                Good Morning, Matthew D
            </Text>
            <View style={styles.inputContainer}>
                <GooglePlacesAutocomplete
                    fetchDetails
                    debounce={400}
                    styles={styles.input}
                    placeholder="Where to ?"
                    onPress={handleLocationPress}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch" 
                    query={{
                        key: config.services.googleMap,
                        language: 'en'
                    }}
                />
                <NavFavorites />
            </View>
            <View style={styles.rideContainer}>
                <TouchableOpacity 
                    style={styles.ridePrimaryCTA}
                    onPress={() => navigation.navigate('RideOptionsCard')}    
                >
                    <Icon 
                        size={16}
                        name="car"
                        color="white"
                        type="font-awesome"
                    />
                    <Text style={styles.ridePrimaryText}>
                        Rides
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.rideSecondaryCTA}>
                    <Icon 
                        size={16} 
                        color="black"
                        type="ionicon"
                        name="fast-food-outline"
                    />
                    <Text style={styles.ridePrimaryText}>
                        Rides
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard;
