import React from 'react';
import { getYear } from 'date-fns/getYear';
import { getMonth } from 'date-fns/getMonth';
import { View, Text, TouchableOpacity } from 'react-native';

import { Utils } from './Utils';

const Month = ({
	styles,
	months,
	minDate,
	maxDate,
	textStyle,
	onSelectMonth,
	currentYear: year,
	currentMonth: month,
}) => {
	const MONTHS = months || Utils.MONTHS; // English Month Array
	const monthName = MONTHS[month];

	const monthOutOfRange = React.useMemo(() => {
		let monthIsBeforeMin = false;
		let monthIsAfterMax = false;
		let monthIsDisabled = false;

		// Check whether month is outside of min/max range.
		if (maxDate && (getYear(maxDate) === year)) {
			monthIsAfterMax = month > getMonth(maxDate);
		}
		if (minDate && (getYear(minDate) === year)) {
			monthIsBeforeMin = month < getMonth(minDate);
		}

		// ToDo: disabledMonths props to disable months separate from disabledDates

		return monthIsAfterMax || monthIsBeforeMin || monthIsDisabled;
	}, [month, minDate, maxDate]);

	const onSelect = () => {
		let _year = year;

		if (minDate && (year < getYear(minDate))) {
			_year = getYear(minDate);
		}

		if (maxDate && (year > getYear(maxDate))) {
			_year = getYear(maxDate);
		}

		onSelectMonth({ month, year: _year });
	};

	return (
		<View style={[styles.monthContainer]}>
			{!monthOutOfRange ? (
				<TouchableOpacity
					onPress={onSelect}
				>
					<Text style={[styles.monthText, textStyle]}>
						{monthName}
					</Text>
				</TouchableOpacity>
			) : (
				<Text style={[textStyle, styles.disabledText]}>
					{monthName}
				</Text>
			)}
		</View>
	);
}

export default Month;
