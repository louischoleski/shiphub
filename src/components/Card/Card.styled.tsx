import { StyleSheet } from 'react-native';

const DEFAULT_SPACING = 12;

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: 'white',
        //
        paddingBottom: 0,
        paddingTop: DEFAULT_SPACING,
        paddingLeft: DEFAULT_SPACING,
        paddingRight: DEFAULT_SPACING,
        //
        marginTop: DEFAULT_SPACING,
        marginLeft: DEFAULT_SPACING,
        marginRight: DEFAULT_SPACING,
        marginBottom: DEFAULT_SPACING,
    },
    header: {

    },
    title: {

    },
    description: {
        fontSize: 10,
        marginBottom: 20,
    },
    body: {
        marginBottom: 10
    },
});

export default styles;
