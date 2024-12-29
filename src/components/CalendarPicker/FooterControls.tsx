// TODO
import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';

// import Controls from './Controls';
import { CarretIcon, Utils } from './Utils';

export interface IFooterControlsProps {
	maxDate?: Date;
	minDate?: Date;
	months?: string[];
	// nextTitle: string;
	currentYear: number;
	currentMonth: number;
	headingLevel?: string;
	// previousTitle: string;
	// onPressNext: () => void;
	onPressYear: () => void;
	onPressMonth: () => void;
	// onPressPrevious: () => void;
	styles: StyleProp<ViewStyle>;
	// nextComponent?: React.ReactNode;
	textStyle?: StyleProp<TextStyle>;
	// restrictMonthNavigation: boolean;
	// previousComponent?: React.ReactNode;
	// nextTitleStyle?: StyleProp<TextStyle>;
	yearTitleStyle?: StyleProp<TextStyle>;
	monthTitleStyle?: StyleProp<TextStyle>;
	// previousTitleStyle?: StyleProp<TextStyle>;
	headerWrapperStyle?: StyleProp<ViewStyle>;
	monthYearHeaderWrapperStyle?: StyleProp<ViewStyle>;
}

const accessibilityProps: { [key: string]: any; } = {
	accessibilityRole: 'header'
};

const FooterControls: React.FC<IFooterControlsProps> = ({
	styles,
	months,
	// maxDate,
	// minDate,
	// nextTitle,
	textStyle,
	currentYear,
	// onPressNext,
	onPressYear,
	currentMonth,
	onPressMonth,
	headingLevel,
	// nextComponent,
	// previousTitle,
	// nextTitleStyle,
	yearTitleStyle,
	// onPressPrevious,
	monthTitleStyle,
	// previousComponent,
	// previousTitleStyle,
	headerWrapperStyle,
	// restrictMonthNavigation,
	monthYearHeaderWrapperStyle,
}) => {
	const MONTHS = months || Utils.MONTHS; // English Month Array
	const monthName = MONTHS[currentMonth];

	// const disablePreviousMonth = React.useMemo(() => (
	// 	restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear)
	// ), [minDate, currentMonth, currentYear, restrictMonthNavigation]);

	// const disableNextMonth = React.useMemo(() => (
	// 	restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear)
	// ), [maxDate, currentMonth, currentYear, restrictMonthNavigation]);

	if (Platform.OS === 'web') {
		accessibilityProps['aria-level'] = headingLevel;
	}

	return (
		<View style={[styles.headerWrapper, headerWrapperStyle]}>
			<View styles={styles.previousContainer}>
				<TouchableOpacity onPress={onPressMonth}>
					<Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle]} {...accessibilityProps}>
						Clear
					</Text>
				</TouchableOpacity>
			</View>
			<View style={[styles.monthYearHeaderWrapper, monthYearHeaderWrapperStyle]} />
			<View styles={styles.nextContainer}>
				<TouchableOpacity onPress={onPressYear}>
					<Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle]}>
						Ok
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default FooterControls;
