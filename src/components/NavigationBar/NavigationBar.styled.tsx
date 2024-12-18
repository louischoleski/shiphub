import tw from 'twrnc';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rootView: {
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        ...tw`shadow-md`,
        position: 'absolute',
        backgroundColor: 'white',
        paddingBottom: Platform.OS === 'ios' ? 25 : 0,
    },
    tabBarView: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
    },
    createBtn: {
        marginBottom: 0,
    },
    createButtonContainer: {
        paddingHorizontal: 16
    },
    navCTA: {

    },
    navIcon: {
        ...tw`flex-row justify-center`
    },
    iconText: {
        marginTop: 8,
        fontSize: 12,
    }
});

export default styles;
