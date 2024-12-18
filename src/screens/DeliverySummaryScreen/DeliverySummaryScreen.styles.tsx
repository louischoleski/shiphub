import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mapContainer: tw`h-1/2`,
    mapListing: tw`h-1/2`,
    menuCTA: {
        top: 65,
        left: 10,
        backgroundColor: '#007BFF',
        ...tw`absolute z-50 p-3 rounded-full shadow-lg`,
    },
});

export default styles;
