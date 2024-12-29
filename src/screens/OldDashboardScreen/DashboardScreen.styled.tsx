import tw from 'twrnc';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: tw`bg-white h-full`,
    containerView: tw`p-5`,
    brandImg: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    mapContainter: {
        container: {
            zIndex: 1,
            width: '100%',
            marginBottom: 40
        },
        textInputContainer: {
            flexDirection: 'row',
        },
        textInput: {
            backgroundColor: '#FFFFFF',
            height: 44,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
        },
        listView: {
            position: 'absolute',
            backgroundColor: '#FFF',
            zIndex: 10,
        },
        row: {
            backgroundColor: '#FFFFFF',
            padding: 13,
            height: 44,
            flexDirection: 'row',
        },
        separator: {
            height: 0.5,
            backgroundColor: '#c8c7cc',
        },
        description: {},
        loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
        },
    }
})

export default styles;
