import React from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';

import { Utils } from './Utils';
import Controls from './Controls';

const accessibilityProps = { accessibilityRole: 'header' };

const HeaderControls = ({
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
	const year = currentYear;

	const disablePreviousMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(minDate, currentMonth, currentYear);

	const disableNextMonth = restrictMonthNavigation && Utils.isSameMonthAndYear(maxDate, currentMonth, currentYear);

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
			<View style={[styles.monthYearHeaderWrapper,monthYearHeaderWrapperStyle]}>
				<TouchableOpacity onPress={onPressMonth}>
					<Text style={[styles.monthHeaderMainText, textStyle, monthTitleStyle]} {...accessibilityProps}>
						{ monthName }
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={onPressYear}>
					<Text style={[styles.yearHeaderMainText, textStyle, yearTitleStyle]}>
						{ year }
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
