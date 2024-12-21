import React from 'react';
import { View, Text, Platform } from 'react-native';

const MonthsHeader = ({
	title,
	styles,
	textStyle,
	headingLevel,
}) => {
	const accessibilityProps = { accessibilityRole: 'header' };

	if (Platform.OS === 'web') {
		accessibilityProps['aria-level'] = headingLevel;
	}

	return (
		<View style={styles.headerWrapper}>
			<Text style={[styles.monthsHeaderText, textStyle]}>
				{title}
			</Text>
		</View>
	);
}

export default MonthsHeader;
