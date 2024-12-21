// Parent view for Month selector
import { View } from 'react-native';
import React, { Component } from 'react';

import MonthsHeader from './MonthsHeader';
import MonthsGridView from './MonthsGridView';

const MonthSelector = ({
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
