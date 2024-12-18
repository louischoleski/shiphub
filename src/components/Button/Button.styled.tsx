import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    // Size
    container_size_xs: {
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    container_size_sm: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    container_size_md: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    container_size_lg: {
        paddingVertical: 8,
        paddingHorizontal: 24,
    },
    // Text
    text_size_xs: {
        fontSize: 9,
    },
    text_size_sm: {
        fontSize: 9,
    },
    text_size_md: {
        fontSize: 12,
    },
    text_size_lg: {
        fontSize: 18,
    },
    // Container
    container_PRIMARY: {
        backgroundColor: '#007BFF',
    },
    container_SECONDARY: {
        borderWidth: 2,
        borderColor: '#007BFF',
    },
    container_TERTIARY: {},
    container_DISABLED: {
        backgroundColor: '#E1E1E1',
    },
    container_SUCCESS: {
        backgroundColor: '#198754',
    },
    container_DANGER: {
        backgroundColor: '#dc3545',
    },
    container_WARNING: {
        backgroundColor: '#FFC107',
    },
    // Txt
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    text_SECONDARY: {
        color: '#007BFF',
    },
    text_TERTIARY: {
        color: 'gray',
    },
    text_DISABLED: {
        color: '#606060',
    },
    text_WARNING: {
        color: '#212529',
    },
});

export default styles;
