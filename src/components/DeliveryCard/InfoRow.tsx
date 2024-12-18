import React from 'react';
import { Text, View } from 'react-native';

import Grid from '../Grid';

import {
    getLabels, 
    IInfoRowProps,
} from './DeliveryCard.controller';
import styles from './DeliveryScreen.styled';

const InfoRow = ({ type, data }: IInfoRowProps) => {
    const [fromTitle, toTitle] = React.useMemo(() => getLabels(type as string), [type]);

    return (
        <View style={styles.infoWrapper}>
            <Grid cols={2}>
                <View style={styles.infoLeft}>
                    <Text style={[styles.infoTitle, styles.textAlignRight]}>
                        {fromTitle}
                    </Text>
                    <Text style={[styles.infoDescription, styles.textAlignRight]}>
                        {data.fromValue}
                    </Text>
                </View>
                <View style={styles.infoRight}>
                    <Text style={[styles.infoTitle, styles.textAlignRight]}>
                        {toTitle}
                    </Text>
                    <Text style={[styles.infoDescription, styles.textAlignRight]}>
                        {data.toValue}
                    </Text>
                </View>
            </Grid>
        </View>
    );
};

export default InfoRow;
