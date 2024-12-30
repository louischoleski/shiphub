        import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headingContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        height: 40,
        ...tw`mr-4 p-2`,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
    },
    iconWrapper: {
        margin: 12,
        padding: 12,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#E1E1E1',
        backgroundColor: 'white',
    },
    statusWrapper: {
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#E1E1E1',
        ...tw`flex-row items-evenly`
    },
    info: {
        flex: 1,
    },
    // Location row.
    locationWrapper: {
        marginVertical: 25,
        flexDirection: 'row',
    },
    locationFrom: {
        flex: 1,
        color: '#212529',
        textAlign: 'left',
        verticalAlign: 'middle',
    },
    locationIcon: {
    },
    locationTo: {
        flex: 1,
        color: '#212529',
        textAlign: 'right',
        verticalAlign: 'middle',
    },
    // Receiver row.
    receiverName: {
        flex: 1,
        verticalAlign: 'middle',
        alignItems: 'flex-start',
    },
    receiverNumber: {
        flex: 1,
        alignItems: 'flex-end',
        verticalAlign: 'middle',
    },
    // Receiver fee.
    boldDarkText: {
        color: 'black',
        marginVertical: 25,
        fontWeight: 'bold',
    },
    feeTitle: {
        textAlign: 'left',
    },
    feeAmount: {
        textAlign: 'right',
    },
    receiverText: {
        marginTop: 8,
    },
    description: {
        color: '#6C757D',
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        paddingTop: 5,
        ...tw`font-semibold`
    },
    //
    currentLocationIconWrapper: tw`flex-row items-center p-5`,
    currentLocationInfo: {
        flex: 1,
    },
    currentLocationDescription: {
        fontSize: 12,
    },
    currentLocationTimestamp: {
        fontSize: 12,
        paddingTop: 5,
        color: '#6C757D',
        fontWeight: 'bold',
    },
    currentLocationIcon: {
        backgroundColor: '#DFEEFF',
        ...tw`mr-4 rounded-full p-3`
    },
    //
    tabWrapper: {
        marginBottom: 15,
    } 
});

export default styles;
