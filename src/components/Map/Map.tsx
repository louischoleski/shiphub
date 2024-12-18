import axios from 'axios';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Text, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';

import config from '../../config';
import styles from './Map.styled';
import { setNavTime } from '../../store/actions/nav';
import { selectNavOrigin, setNavDestination, selectNavDestination } from '../../store/selectors/nav';

const DEFAULT_MAP_DELTA = {
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
}

const DEFAULT_EDGE_PADDING = {
    top: 50, right: 50, bottom: 50, left: 50
}

const Map = ({ origin, destination }) => {
    const dispatch = useDispatch();
    const mapRef = React.useRef(null);
    // const origin = useSelector(selectNavOrigin);
    // const destination = useSelector(selectNavDestination);

    const mapType = React.useMemo(() => (
		Platform.OS === 'ios' ? 'mutedStandard' : 'none'
	), [Platform.OS]);

    // React.useEffect(() => {
    //     if (!origin || !destination) return;

    //     // Zoom & fit to markets
    //     mapRef?.current.fitToSuppliedMarkers(['origin', 'destination'], {
    //         edgePadding: DEFAULT_EDGE_PADDING
    //     })
    // }, [origin, destination]);

    const originCoordinate = React.useMemo(() => ({
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
    }), [origin]);

    const destinationCoordinate = React.useMemo(() => ({
        latitude: destination?.location.lat,
        longitude: destination?.location.lng,
    }), [destination]);

    // React.useEffect(() => {
    //     if (!origin || !destination) return;

    //     const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${config.services.googleMap}`;

    //     axios.get(URL).then(({ data: { rows: [{ elements: [ travelInfo] }]} }) => {
    //         dispatch(setNavTime(travelInfo));
    //     });
    // }, [origin, destination]);

    return (
        <MapView
            ref={mapRef}
            mapType={mapType}
            style={styles.mapView}
            initialRegion={{
                ...DEFAULT_MAP_DELTA,
                ...originCoordinate,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    strokeWidth={3}
                    strokeColor="black"
                    origin={origin?.description}
                    apikey={config.services.googleMap}
                    destination={destination?.description}
                />
            )}

            {origin?.location && (
                <Marker
                    title="Origin"
                    identifier="origin"
                    coordinate={originCoordinate}
                    description={origin.description}
                />
            )}

            {destination?.location && (
                <Marker
                    title="Destination"
                    identifier="destination"
                    coordinate={destinationCoordinate}
                    description={destination.description}
                />
            )}
        </MapView>
    )
}

export default Map;
