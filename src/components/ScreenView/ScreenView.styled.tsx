import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        ...tw`h-full`,
        paddingTop: 20,
        display: 'flex',
        backgroundColor: '#F8F9FA',
    },
    withWhiteBg: {
        ...tw`bg-white`,
    },
    //
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    backButton: {
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 40,
        width: 100,
        resizeMode: 'contain',
    },
    placeholder: {
        width: 40, // Same width as backButton for proper centering
    },
});

export default styles;
