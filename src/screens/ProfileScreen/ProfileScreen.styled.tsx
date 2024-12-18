import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const DEFAULT_SPACING = 12;

const styles = StyleSheet.create({
    container: tw`bg-white h-full`,
    containerView: tw`p-5`,
    brandImg: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    icon: {
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: '#DFEEFF',
        ...tw`mr-4 rounded-full p-2`,
    },
    iconWrapper: {
        ...tw`flex-row items-center`,
        paddingTop: DEFAULT_SPACING,
        paddingBottom: DEFAULT_SPACING,
    },
    info: {
        flex: 1,
    },
    description: {

    },
    timestamp: {
        fontSize: 12,
        paddingTop: 5,
        ...tw`text-gray-500`
    },
    border: {
        height: 0.5,
    },
    logout: {
        flexGrow: 1,
        marginBottom: 104,
        justifyContent: 'flex-end',
        marginLeft: DEFAULT_SPACING,
        marginRight: DEFAULT_SPACING,
    }
})

export default styles;
