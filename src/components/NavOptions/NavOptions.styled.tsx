import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: 120, 
        height: 120, 
        resizeMode: "contain"
    },
    listItem: tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`,
    iconArrow: tw`p-2 bg-black rounded-full w-10 mt-4`,
    itemTitle: tw`mt-2 text-lg font-semibold`,
    disabledCTA:  tw`opacity-20`,
});

export default styles;