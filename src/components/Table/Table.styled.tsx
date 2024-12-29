import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tableContainer: {
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 8,
        marginRight: 10,
        overflow: 'hidden',
        borderColor: '#E1E1E1',
        backgroundColor: '#fff',
    },
    headerContainer: {
        top: 0,
        zIndex: 1,
        position: 'sticky',
        paddingVertical: 10,
        borderColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF2CA',
    },
    headerText: {
        flex: 1,
        fontSize: 11,
        color: '#333',
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        fontWeight: 'bold',
        overflow: 'hidden',
        alignItems: 'center',
        paddingHorizontal: 8,
        verticalAlign: 'middle',
        textOverflow: 'ellipsis',
        justifyContent: 'center',
    },
    headerDivider: {
        // borderRightWidth: 1,
        // borderRightColor: '#c4c4c4',
    },
    row: {
        paddingVertical: 8,
        borderColor: '#DDD',
        flexDirection: 'row',
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
    },
    rowDefault: {
        backgroundColor: '#FFF',
    },
    rowStripped: {
        backgroundColor: '#FFFCF2',
    },
    cell: {
        flex: 1,
        fontSize: 12,
        color: '#333',
        textAlign: 'left',
        overflow: 'hidden',
        paddingVertical: 4,
        paddingHorizontal: 8,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    noDataText: {
        fontSize: 14,
        color: '#999',
        marginVertical: 165,
        textAlign: 'center',
    },
    scrollableContent: {
        overflowY: 'auto',
    },
});

export default styles;
