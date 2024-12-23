import React from 'react';
import { View } from 'react-native';

import Month from './Month';

export interface IMonthsGridViewProps {
	styles?: any;
	months?: any[];
	minDate?: Date;
	maxDate?: Date;
	textStyle?: any;
	currentYear: number;
	onSelectMonth: (params: { month: number; year: number }) => void;
}

const columnArray = [0, 1, 2];

const rowArray = [0, 1, 2, 3];

const _months = Array.from(Array(12).keys());

const MonthsGridView: React.FC<IMonthsGridViewProps> = ({
	months,
	styles,
	minDate,
	maxDate,
	textStyle,
	currentYear,
	onSelectMonth,
}) => (
	<View style={styles.monthsWrapper}>
		{rowArray.map((rIdx) => (
			<View key={rIdx} style={styles.monthsRow}>
				{columnArray.map((cIdx) => {
					const currentMonth = _months[rIdx * columnArray.length + cIdx];
					if (currentMonth === undefined) return null;

					return (
						<Month
							months={months}
							styles={styles}
							minDate={minDate}
							maxDate={maxDate}
							textStyle={textStyle}
							currentYear={currentYear}
							key={currentMonth + cIdx}
							currentMonth={currentMonth}
							onSelectMonth={onSelectMonth}
						/>
					);
				})}
			</View>
		))}
	</View>
);

export default MonthsGridView;
