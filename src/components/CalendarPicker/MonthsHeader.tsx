import React from 'react';
import { View, Text, Platform, StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface IMonthsHeaderProps {
	title: string;
	headingLevel?: number;
	styles: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
}

const accessibilityProps: { [key: string]: any; } = {
	accessibilityRole: 'header'
};

const MonthsHeader: React.FC<IMonthsHeaderProps> = ({
	title,
	styles,
	textStyle,
	headingLevel,
}) => {
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
