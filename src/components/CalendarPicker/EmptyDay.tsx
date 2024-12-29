import React from 'react';
import { View } from 'react-native';

export interface IEmptyDayProps {
	styles: any;
}

const EmptyDay: React.FC<IEmptyDayProps> = ({ styles }) => (
	<View style={styles.dayWrapper}>
		<View style={styles.dayButton} />
	</View>
);

export default EmptyDay;
