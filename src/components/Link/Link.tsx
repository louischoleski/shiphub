import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './Link.styled';

interface ILinkProps extends TextProps {
    style?: any;
    onPress?: () => void;
    children: React.ReactNode;
}

// Define the Link component with props type
const Link: React.FC<ILinkProps> = ({
    style = {},
    onPress = () => null, 
    children, 
    ...textProps
}) => {
    const onLinkPressed = () => {
        console.log('Link pressed');
        onPress();
    };

    return (
        <Text style={{ ...styles.defaultLink, ...style }} onPress={onLinkPressed} {...textProps}>
            {" "}
            {children}
            {" "}
        </Text>
    );
};

export default Link;
