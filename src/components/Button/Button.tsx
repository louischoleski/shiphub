import React from 'react';
import { Text, Pressable, GestureResponderEvent } from 'react-native';

import styles from './Button.styled';

export interface IButtonProps {
    text: string;
    bgColor?: string;
    fgColor?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'DISABLED' | 'SUCCESS' | 'DANGER' | 'WARNING';
    onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<IButtonProps> = ({
    text,
    onPress,
    bgColor,
    fgColor,
    size = 'md',
    type = 'PRIMARY',
}) => {
    const [containerStyle, containerSizeStyle, textStyle, textSizeStyle] = React.useMemo(() => {
        const textKey = `text_${type}`;
        const textSizeKey = `text_size_${size}`;
        const containerKey = `container_${type}`;
        const containerSizeKey = `container_size_${size}`;

        return [
            styles[containerKey],
            styles[containerSizeKey],
            styles[textKey],
            styles[textSizeKey],
        ];
    }, [type]);

    return (
        <Pressable 
            onPress={onPress} 
            style={[
                containerSizeStyle,
                styles.container, 
                containerStyle,
                bgColor ? { backgroundColor: bgColor } : {},   
            ]}
        >
            <Text 
                style={[
                    textSizeStyle,
                    styles.text, 
                    textStyle,
                    fgColor ? { color: fgColor } : {},
                ]}
            >
                 {text}
            </Text>
        </Pressable>
    );
};

export default Button;
