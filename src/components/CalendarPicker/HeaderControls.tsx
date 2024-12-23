import React from 'react';
import { View, Text, Platform, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';

import { Utils } from './Utils';
import Controls from './Controls';

export interface IHeaderControlsProps {
	maxDate?: Date;
	minDate?: Date;
	months?: string[];
	nextTitle: string;
	currentYear: number;
	currentMonth: number;
	headingLevel?: string;
	previousTitle: string;
	onPressNext: () => void;
	onPressYear: () => void;
	onPressMonth: () => void;
	onPressPrevious: () => void;
	styles: StyleProp<ViewStyle>;
	nextComponent?: React.ReactNode;
	textStyle?: StyleProp<TextStyle>;
	restrictMonthNavigation: boolean;
	previousComponent?: React.ReactNode;
	nextTitleStyle?: StyleProp<TextStyle>;
	yearTitleStyle?: StyleProp<TextStyle>;
	monthTitleStyle?: StyleProp<TextStyle>;
	previousTitleStyle?: StyleProp<TextStyle>;
	headerWrapperStyle?: StyleProp<ViewStyle>;
	monthYearHeaderWrapperStyle?: StyleProp<ViewStyle>;
}

const accessibilityProps: { [key: string]: any; } = {
	accessibilityRole: 'header'
};

const HeaderControls: React.FC<IHeaderControlsProps> = ({
	styles,
	months,
	maxDate,
	minDate,
	nextTitle,
	textStyle,
	currentYear,
	onPressNext,
	onPressYear,
	currentMonth,
	onPressMonth,
	headingLevel,
	nextComponent,
	previousTitle,
	nextTitleStyle,
	yearTitleStyle,
	onPressPrevious,
	monthTitleStyle,
	previousComponent,
	previousTitleStyle,
	headerWrapperStyle,
	restrictMonthNavigation,
	monthYearHeaderWrapperStyle,
}) => {
	const MONTHS = months || Utils.MONTHS; // English Month Array
	const monthName = MONTHS[currentMonth];

	const disablePreviousMonth = React.useMemo(() => (
		restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear)
	), [minDate, currentMonth, currentYear, restrictMonthNavigation]);

	const disableNextMonth = React.useMemo(() => (
		restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear)
	), [maxDate, currentMonth, currentYear, restrictMonthNavigation]);

	if (Platform.OS === 'web') {
		accessibilityProps['aria-level'] = headingLevel;
	}

	return (
		<View style={[styles.headerWrapper, headerWrapperStyle]}>
			<Controls
				label={previousTitle}
				component={previousComponent}
				disabled={disablePreviousMonth}
				onPressControl={onPressPrevious}
				styles={styles.previousContainer}
				textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
			/>
			<View style={[styles.monthYearHeaderWrapper, monthYearHeaderWrapperStyle]}>
				<TouchableOpacity onPress={onPressMonth}>
					<Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle]} {...accessibilityProps}>
						{monthName}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={onPressYear}>
					<Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle]}>
						{currentYear}
					</Text>
				</TouchableOpacity>
			</View>
			<Controls
				label={nextTitle}
				component={nextComponent}
				disabled={disableNextMonth}
				onPressControl={onPressNext}
				styles={styles.nextContainer}
				textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
			/>
		</View>
	);
}

export default HeaderControls;
