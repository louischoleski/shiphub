import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        padding: 5,
        fontSize: 15,
        marginLeft: 0,
        marginRight: 15,
        ...tw`shadow-sm`,
        color: "#606060",
        borderRadius: 25,
        paddingHorizontal: 15,
        backgroundColor: 'white',
    },
    active: {
        fontWeight: 'bold',
        backgroundColor: '#FFC107',
    },
    listStyle: {
        margin: 0,
        paddingVertical: 2,
        textAlign: "center",
    },
});

export default styles;