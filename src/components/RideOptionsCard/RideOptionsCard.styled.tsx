import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: tw`bg-white flex-1`,
    header: tw`text-center py-5 text-xl`,
    backNavCTA: tw`absolute top-3 left-5 p-3 rounded-full z-50`,
    itemWrapper: tw`flex-row justify-between items-center px-10`,
    innactiveItem: tw`bg-gray-200`,
    itemInfoWrapper: tw`-ml-6`, 
    itemInfoTitle: tw`text-xl font-semibold`,
    itemInfoPrice: tw`text-xl`,
    chooseCTAWrapper: tw`mt-auto border-t border-gray-200`,
    chooseCTA: tw`bg-black py-3 m-3`,
    innactiveChooseCTA: tw`bg-gray-300`,
    chooseCTAText: tw`text-center text-white text-xl`
});

export default styles;