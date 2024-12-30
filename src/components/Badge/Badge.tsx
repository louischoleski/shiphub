import React from 'react';
import { View, Text } from 'react-native';

import styles from './Badge.styled';
import { IBadgeProps } from './Badge.controller';

const Badge: React.FC<IBadgeProps> = ({
    children,
    round = false,
    type = 'PRINMARY',
}) => {
    const badgeStyles = React.useMemo(() => {
        const parsedType = (type || '').toUpperCase();
        return [
            styles.badge,
            styles[parsedType],
            round && styles.round
        ];
    }, [type, round]);

    return (
        <View style={badgeStyles}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
};

export default Badge;
