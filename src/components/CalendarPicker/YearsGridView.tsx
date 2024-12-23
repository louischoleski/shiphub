import React from 'react';
import { View, StyleProp, ViewStyle, TextStyle } from 'react-native';

import Year from './Year';

export interface IYearsGridViewProps {
	minDate?: Date;
	maxDate?: Date;
	intialYear: number;
	currentYear: number;
	currentMonth: number;
	styles: StyleProp<ViewStyle>;
	textStyle?: StyleProp<TextStyle>;
	onSelectYear: (year: number) => void;
}

const guideArray = [0, 1, 2, 3, 4];

const YearsGridView: React.FC<IYearsGridViewProps> = ({
	styles,
	minDate,
	maxDate,
	textStyle,
	intialYear,
	currentYear,
	currentMonth,
	onSelectYear,
}) => {
	let year = intialYear - 13; // center current year in grid

	const generateColumns = () => (
		guideArray.map(() => {
			year++;
			return (
				<Year
					key={year}
					year={year}
					styles={styles}
					minDate={minDate}
					maxDate={maxDate}
					textStyle={textStyle}
					currentYear={currentYear}
					currentMonth={currentMonth}
					onSelectYear={onSelectYear}
				/>
			);
		})
	);

	return (
		<View style={styles.yearsWrapper}>
			{guideArray.map(index => (
				<View key={year} style={styles.yearsRow}>
					{generateColumns(index)}
				</View>
			))}
		</View>
	);
}

export default YearsGridView;
