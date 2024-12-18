import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    container_PENDING: {
        backgroundColor: '#c264201a',
    },
    text_PENDING: {
        color: '#C26420',
    },
    container_CANCELLED: {
        backgroundColor: '#650f101a',
    },
    text_CANCELLED: {
        color: '#650F10',
    },
    container_DELIVERED: {
        backgroundColor: '#0f65371a',
    },
    text_DELIVERED: {
        color: '#0F6537',
    },
    container_IN_TRANSIT: {
        backgroundColor: '#ffc1071a',
    },
    text_IN_TRANSIT: {
        color: '#66500E',
    },
});

export default styles;

