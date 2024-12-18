import tw from 'twrnc';
import { Platform, StyleSheet } from 'react-native';

const DEFAULT_PROGRESS_ITEM_HEIGHT = 80;

const styles = StyleSheet.create({
    root: {
        margin: 12,
        backgroundColor: 'white',
        marginBottom: Platform.OS === 'ios' ? 40 : 12,
    },
    // Header
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
    },
    shipmentHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconContainer: {
        padding: 8,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 4,
        borderColor: '#E1E1E1',
    },
    shipmentNumber: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    shipmentHeaderSubtitle: {
        color: '#606060',
    },
    shipmentHeaderId: {
        fontSize: 12,
        color: '#212529',
    },
    shipmentStatus: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Location row.
    shipmentLocation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationFrom: {
        flex: 1,
        color: '#212529',
        textAlign: 'left',
        verticalAlign: 'middle',
    },
    locationIcon: {
        marginHorizontal: 24,
    },
    locationTo: {
        flex: 1,
        color: '#212529',
        textAlign: 'right',
        verticalAlign: 'middle',
    },
    // Correspondent
    infoWrapper: {
        marginTop: 25,
    },
    infoLeft: {
        verticalAlign: 'middle',
        alignItems: 'flex-start',
    },
    infoRight: {
        alignItems: 'flex-end',
        verticalAlign: 'middle',
    },
    infoTitle: {
        color: '#6C757D',
    },
    infoDescription: {
        marginTop: 8,
    },
    infoPricing: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 25,
    },
    // Progress
    progressHeader: {
        marginBottom: 10,
        verticalAlign: 'middle',
        alignItems: 'flex-start',
    },
    progressTitle: {
        color: '#6C757D',
    },
    progressWrapper: {
        backgroundColor: '#F8F9FA',
        maxHeight: DEFAULT_PROGRESS_ITEM_HEIGHT * 2,
    },
    progressItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'center',
        minHeight: DEFAULT_PROGRESS_ITEM_HEIGHT,
    },
    progressDescription: {
        flex: 1,
        fontSize: 12,
        color: '#212529',
        textAlign: 'right',
        fontWeight: 'bold',
        verticalAlign: 'middle',
    },
    progressItemTimestamp: {
        flex: 1,
        color: '#212529',
        textAlign: 'left',
        verticalAlign: 'middle',
    },
    progressSection: {
        paddingVertical: 20,
    },
    progressIconWrapper: {
        top: 0,
        height: 80,
        verticalAlign: 'middle',
    },
    progressIcon: {
        top: 20,
        left: 0,
        padding: 5,
        borderRadius: 100,
        backgroundColor: '#007BFF',
    },
    progressDivider: {
        left: 16,
        width: 2,
        position: 'absolute',
        backgroundColor: '#007BFF',
        height: DEFAULT_PROGRESS_ITEM_HEIGHT,
    },
    progressCircleDivider: {
        top: 16,
        left: -4,
        width: 42,
        height: 42,
        borderWidth: 2,
        borderRadius: 100,
        position: 'absolute',
        borderColor: '#007BFF',
        backgroundColor: 'white',
    },
    // Misc
    boldText: {
        fontWeight: 'bold',
    },
    textAlignLeft: {
        textAlign: 'left',
    },
    textAlignRight: {
        textAlign: 'right',
    },
    lightGray: {
        color: '#606060',
    },
    bordered: {
        padding: 12,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 12,
        borderColor: '#E1E1E1',
    },
    divider: {
        height: 1,
        marginVertical: 24,
        backgroundColor: '#E1E1E1',
        ...tw`flex-row items-evenly`
    },
});

export default styles;
