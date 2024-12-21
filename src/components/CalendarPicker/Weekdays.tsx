import React from 'react';
import { View, Text } from 'react-native';

import { Utils } from './Utils';

const Weekdays = ({
	styles,
	firstDay,
	weekdays,
	textStyle,
	dayLabelsWrapper,
	currentYear: year,
	currentMonth: month,
	customDayHeaderStyles,
}) => {
	// dayOfWeekNums: ISO week day numbers
	const dayOfWeekNums = Utils.getISOWeekdaysOrder(firstDay);

	const wd = React.useMemo(() => (
		weekdays || (
			firstDay ? (
				Utils.getWeekdays(firstDay)
			) : Utils.WEEKDAYS // English Week days Array
		)
	), [weekdays, firstDay]);

	return (
		<View style={[styles.dayLabelsWrapper, dayLabelsWrapper]}>
			{wd.map((day, key) => {
				const dayOfWeekTextStyle = [styles.dayLabels, textStyle];
				let customDayOfWeekStyles = {};
			
				if (customDayHeaderStyles instanceof Function) {
					const dayOfWeek = dayOfWeekNums[key];
					customDayOfWeekStyles = customDayHeaderStyles({ dayOfWeek, month, year }) || {};
					dayOfWeekTextStyle.push(customDayOfWeekStyles.textStyle);
				}
			
				return (
					<View style={customDayOfWeekStyles.style} key={key}>
						<Text style={dayOfWeekTextStyle}>
							{day}
						</Text>
					</View>
				);
			})}
		</View>
	);
}

export default Weekdays;

