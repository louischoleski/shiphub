import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    favIcon: tw`mr-4 rounded-full bg-gray-300 p-3`,
    favIconWrapper: tw`flex-row items-center p-5`,
    favLocation: tw`font-semibold text-lg`,
    favDestination: tw`text-gray-500`,
    favBorder: {
        height: 0.5,
        ...tw`bg-gray-200`,
    },
});

export default styles;
