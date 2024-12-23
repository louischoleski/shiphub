import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';

import MonthsHeader from './MonthsHeader';
import MonthsGridView from './MonthsGridView';

export interface IMonthSelectorProps {
	title: string;
	minDate?: Date;
	maxDate?: Date;
	months: string[];
	currentYear: number;
	headingLevel?: number;
	styles: StyleProp<TextStyle>;
	textStyle?: StyleProp<TextStyle>;
	onSelectMonth: (params: { month: number; year: number }) => void;
}

const MonthSelector: React.FC<IMonthSelectorProps> = ({
	title,
	styles,
	months,
	minDate,
	maxDate,
	textStyle,
	currentYear,
	headingLevel,
	onSelectMonth,
}) => (
	<View styles={styles.calendar}>
		<MonthsHeader
			styles={styles}
			textStyle={textStyle}
			title={title + currentYear}
			headingLevel={headingLevel}
		/>
		<MonthsGridView
			styles={styles}
			months={months}
			minDate={minDate}
			maxDate={maxDate}
			textStyle={textStyle}
			currentYear={currentYear}
			onSelectMonth={onSelectMonth}
		/>
	</View>
);

export default MonthSelector;
