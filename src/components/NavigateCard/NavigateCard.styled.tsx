import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: tw`bg-white flex-1`,
    header: tw`text-center py-5 text-xl`,
    inputContainer: tw`border-t border-gray-200 flex-shrink`,
    input: {
        container: {
            backgroundColor: "#FFF",
            paddingTop: 20,
            flex: 0
        },
        textInput: {
            backgroundColor: "#DDDDDF",
            borderRadius: 0,
            fontSize: 18
        },
        textInputContainer: {
            paddingHorizontal: 20,
            paddingBottom: 0
        }
    },
    rideContainer: tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`,
    ridePrimaryCTA: tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`,
    rideSecondaryCTA: tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`,
    rideSecondaryText: tw`text-black text-center`,
    ridePrimaryText: tw`text-white text-center`,
});

export default styles;
