import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    searchFilters: {
        marginTop: -18,
        paddingHorizontal: 16,
    },
    dateSelectionContainer: {
        alignItems: 'flex-end',
        backgroundColor: 'red'
    },
    //
    info: {
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    infoRight: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    //
    dateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateTxt:{
        color: '#007BFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    navIcon: {
        //backgroundColor: 'red',
        width: 20,
        height: 16,
        marginLeft: 10,
        alignItems: 'flex-end',
        justifyContent: 'center',
        // ...tw`flex-row justify-center`
    },
});

export default styles;
