import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#E1E1E1',
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 16,
        color: '#6C757D',
    },
    activeTabText: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
    indicator: {
        bottom: 0,
        height: 1,
        position: 'absolute',
        backgroundColor: '#007BFF',
    },
});

export default styles;
