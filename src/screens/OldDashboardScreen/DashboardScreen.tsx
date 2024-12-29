import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View, Image } from 'react-native';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import config from '../../config';
import styles from './DashboardScreen.styled';
import { withPrivateNav } from '../../utils/hocs';
import { setNavOrigin } from '../../store/actions/nav';
import { ScreenView, NavOptions, NavFavorites } from '../../components';

const DashboardScreen = () => {
    const dispatch = useDispatch();;

    const handleLocationPress = (data: GooglePlaceData, details: GooglePlaceDetail | null) => {
        if (!details) return;

        dispatch(setNavOrigin({
            location: details?.geometry.location, 
            description: data.description
        }));
    }

    return (
        <ScreenView>
            <View style={styles.containerView}>
                <Image
                    style={styles.brandImg}
                    source={{ uri: 'https://links.papareact.com/gzs' }}
                />
                <GooglePlacesAutocomplete
                    fetchDetails
                    minLength={2}
                    debounce={400}
                    placeholder="Enter Location"
                    styles={styles.mapContainter}
                    onPress={handleLocationPress}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    query={{
                        key: config.services.googleMap,
                        language: 'en'
                    }}
                />
                <NavOptions />
                <NavFavorites />
            </View>
        </ScreenView>
    )
}

export default withPrivateNav(DashboardScreen);
