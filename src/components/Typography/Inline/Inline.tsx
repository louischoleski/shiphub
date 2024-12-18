import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './Inline.styled';

interface IInlineProps extends TextProps {
    color?: string;
    children: React.ReactNode;
    type?: 'DEFAULT' | 'PRIMARY' | 'SECONDARY';
}

const Inline: React.FC<IInlineProps> = ({
    color,
    children, 
    style = {},
    type = 'DEFAULT',
}) => {
    const headingConfig = React.useMemo(() => {
        let res = {
            ...styles.defaultColor,
            ...styles.defaultTypography,
        };

        if (type === 'PRIMARY') {
            res = { ...res, ...styles.primaryColor };
        }

        if (color && color.length) {
            res = { ...res, color };
        }

        return { ...res, ...style };;
    }, [type, color, style]);

    return (
        <Text style={headingConfig}>
            {children}
        </Text>
    );
};

export default Inline;
