import React from 'react';
import { View } from 'react-native';

const EmptyDay = ({ styles }) => (
	<View style={styles.dayWrapper}>
		<View style={styles.dayButton} />
	</View>
);

export default EmptyDay;
