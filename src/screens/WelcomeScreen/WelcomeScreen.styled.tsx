import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: tw`bg-white h-full`,
    root: {
        alignItems: 'center',
        padding: 20, 
    },
    brandImg: {
        width: '100%',
        resizeMode: "contain",
    },
});

export default styles;
