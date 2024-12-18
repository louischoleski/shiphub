import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './Heading.styled';

interface IHeadingProps extends TextProps {
    children: React.ReactNode;
    type?: 'DEFAULT' | 'PRIMARY' | 'SECONDARY';
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const fontSizeMap: Record<IHeadingProps['as'], number> = {
    h1: 32,
    h2: 28,
    h3: 24,
    h4: 20,
    h5: 18,
    h6: 16,
};

const Heading: React.FC<IHeadingProps> = ({
    children,
    as = 'h1',
    style = {}, 
    type = 'DEFAULT',
}) => {
    const headingConfig = React.useMemo(() => {
        let res = {
            ...styles.defaultColor,
            ...styles.defaultHeading,
            fontSize: fontSizeMap[as]
        };

        if (type === 'PRIMARY') {
            res = { ...res, ...styles.primaryColor };
        }

        return { ...res, ...style };
    }, [type, as, style]);

    return (
        <Text style={headingConfig}>
            {children}
        </Text>
    );
};

export default Heading;
