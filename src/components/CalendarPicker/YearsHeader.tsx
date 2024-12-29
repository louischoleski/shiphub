import React from 'react';
import { getYear } from 'date-fns/getYear';
import { View, Text, Platform, StyleProp, ViewStyle, TextStyle } from 'react-native';

import Controls from './Controls';

export interface IYearsHeaderProps {
  year: number;
  title: string;
  maxDate?: Date;
  minDate?: Date;
  nextTitle: string;
  headingLevel: number;
  previousTitle: string;
  onYearViewNext: () => void;
  restrictNavigation?: boolean;
  styles: StyleProp<ViewStyle>;
  onYearViewPrevious: () => void;
  nextComponent?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  previousComponent?: React.ReactNode;
  nextTitleStyle?: StyleProp<TextStyle>;
  previousTitleStyle?: StyleProp<TextStyle>;
}

const accessibilityProps: { [key: string]: any; } = {
	accessibilityRole: 'header'
};

const YearsHeader: React.FC<IYearsHeaderProps> = ({
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
