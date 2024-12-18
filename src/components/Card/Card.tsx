import React from 'react';
import { View } from 'react-native';

import styles from './Card.styled';
import Typography from '../Typography';

export interface ICardProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({
    title,
    description,
    children
}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            {title && title.length ? (
                <Typography.Heading as="h4" style={styles.title}>
                    {title}
                </Typography.Heading>
            ) : null}
            {description && description.length ? (
                <Typography.Paragraph style={styles.description}>
                    {description}
                </Typography.Paragraph>
            ) : null}
        </View>
        <View style={styles.body}>
            {children}
        </View>
    </View>
);

export default Card;
