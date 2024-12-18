import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headingContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headingReadAll: {
        fontSize: 12,
        lineHeight: 46,
        textAlignVertical: 'center',
    },
    uneadItem: {
        backgroundColor: '#DFEEFF',
    },
    icon: tw`mr-4 rounded-full p-3`,
    borderedIcon: {
        backgroundColor: '#D9D9D9',
    },
    iconWrapper: tw`flex-row items-center p-5`,
    info: {
        flex: 1,
    },
    description: tw`font-semibold pb-1`,
    timestamp: {
        fontSize: 12,
        paddingTop: 5,
        ...tw`text-gray-500`
    },
    border: {
        height: 0.5,
    },
});

export default styles;
