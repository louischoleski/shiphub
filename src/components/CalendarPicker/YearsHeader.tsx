import React from 'react';
import { getYear } from 'date-fns/getYear';
import { View, Text, Platform } from 'react-native';

import Controls from './Controls';

const accessibilityProps = { accessibilityRole: 'header' };

const YearsHeader = ({
	year,
	title,
	styles,
	maxDate,
	minDate,
	textStyle,
	nextTitle,
	headingLevel,
	nextComponent,
	previousTitle,
	nextTitleStyle,
	onYearViewNext,
	previousComponent,
	previousTitleStyle,
	restrictNavigation,
	onYearViewPrevious,
}) => {
	const disablePrevious = React.useMemo(() => (
		restrictNavigation && minDate && (getYear(minDate) >= year)
	), [ restrictNavigation, minDate, year ]);

	const disableNext = React.useMemo(() => (
		restrictNavigation && maxDate && (getYear(maxDate) <= year)
	), [ restrictNavigation, maxDate, year ]);

	if (Platform.OS === 'web') {
		accessibilityProps['aria-level'] = headingLevel;
	}

	return (
		<View style={styles.headerWrapper}>
			<Controls
				label={previousTitle}
				disabled={disablePrevious}
				component={previousComponent}
				styles={styles.previousContainer}
				onPressControl={onYearViewPrevious}
				textStyles={[styles.navButtonText, textStyle, previousTitleStyle]}
			/>
			<Text 
				style={[styles.yearsHeaderText, textStyle]} 
				{...accessibilityProps}
			>
				{title}
			</Text>
			<Controls
				label={nextTitle}
				disabled={disableNext}
				component={nextComponent}
				styles={styles.nextContainer}
				onPressControl={onYearViewNext}
				textStyles={[styles.navButtonText, textStyle, nextTitleStyle]}
			/>
		</View>
	);
}

export default YearsHeader;
