import React from 'react';
import { Text, TextProps } from 'react-native';

import styles from './Paragraph.styled';

interface IParagraphProps extends TextProps {
    children: React.ReactNode;
    type?: 'DEFAULT' | 'PRIMARY' | 'SECONDARY';
}

const Paragraph: React.FC<IParagraphProps> = ({
    children, 
    type = 'DEFAULT',
    ...textProps
}) => (
    <Text 
        style={styles.paragraph} 
        {...textProps}
    >
        {children}
    </Text>
);

export default Paragraph;
