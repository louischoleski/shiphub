import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    badge: {
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 7,
    },
    text: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
    round: {
        borderRadius: 50,
    },
    PRIMARY: {
        backgroundColor: '#007bff',
    },
    SECONDARY: {
        backgroundColor: '#6c757d',
    },
    SUCCESS: {
        backgroundColor: '#28a745',
    },
    DANGER: {
        backgroundColor: '#dc3545',
    },
    WARNING: {
        backgroundColor: '#ffc107',
    },
    INFO: {
        backgroundColor: '#17a2b8',
    },
    LIGHT: {
        color: '#212529',
        backgroundColor: '#f8f9fa',
    },
    DARK: {
        backgroundColor: '#343a40',
    },
});

export default styles;
