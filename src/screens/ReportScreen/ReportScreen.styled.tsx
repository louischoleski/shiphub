import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const DEFAULT_SPACING = 12;

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
        fontSize: 13,
        color: '#007BFF',
    },
    navIcon: {
        marginLeft: 7,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    // Tab filter
    filters: {
        marginTop: 15,
        marginBottom: 8,
    },
    //
    logout: {
        flexGrow: 1,
        marginBottom: 104,
        justifyContent: 'flex-end',
        marginLeft: DEFAULT_SPACING,
        marginRight: DEFAULT_SPACING,
    },
    marginTop: {
        marginTop: 20,
    }
});

export default styles;
