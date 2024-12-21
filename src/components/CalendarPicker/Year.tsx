import React from 'react';
import { getYear } from 'date-fns/getYear';
import { isAfter } from 'date-fns/isAfter';
import { isBefore } from 'date-fns/isBefore';
import { getMonth } from 'date-fns/getMonth';
import { startOfMonth } from 'date-fns/startOfMonth';
import { View, Text, TouchableOpacity } from 'react-native';

const Year = ({
	year,
	styles,
	minDate,
	maxDate,
	textStyle,
	currentYear,
	currentMonth,
	onSelectYear,
}) => {
	// ToDo: disabledYears props to disable years separate from disabledDates
	const yearOutOfRange = React.useMemo(() => {
		let yearIsAfterMax = false;
		let yearIsDisabled = false;
		let yearIsBeforeMin = false;

		// Check whether year is outside of min/max range.
		if (maxDate) {
			yearIsAfterMax = year > getYear(maxDate);
		}

		if (minDate) {
			yearIsBeforeMin = year < getYear(minDate);
		}

		return yearIsAfterMax || yearIsBeforeMin || yearIsDisabled;
	}, [year, minDate, maxDate]);

	const onSelect = () => {
		// Guard against navigating to months beyond min/max dates.
		let month = currentMonth;
		let currentMonthYear = new Date(currentYear, month);

		if (maxDate && isAfter(currentMonthYear, startOfMonth(maxDate))) {
			month = getMonth(maxDate);
		}

		if (minDate && isBefore(currentMonthYear, startOfMonth(minDate))) {
			month = getMonth(minDate);
		}

		onSelectYear({ month, year });
	};

	return (
		<View style={[styles.yearContainer]}>
			{!yearOutOfRange ? (
				<TouchableOpacity
					onPress={onSelect}
				>
					<Text style={[styles.yearText, textStyle]}>
						{year}
					</Text>
				</TouchableOpacity>
			) : (
				<Text style={[textStyle, styles.disabledText]}>
					{year}
				</Text>
			)}
		</View>
	);
}

export default Year;
