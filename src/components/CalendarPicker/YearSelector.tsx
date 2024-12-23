import React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import YearsHeader from './YearsHeader';
import YearsGridView from './YearsGridView';

export interface IYearSelectorProps {
  title: string;
  minDate: Date;
  maxDate: Date;
  nextTitle: string;
  initialDate: number;
  currentYear: number;
  currentMonth: number;
  textStyle: TextStyle;
  headingLevel: number;
  previousTitle: string;
  nextTitleStyle: TextStyle;
  restrictNavigation: boolean;
  styles: StyleProp<ViewStyle>;
  previousTitleStyle: TextStyle;
  nextComponent: React.ReactNode;
  previousComponent: React.ReactNode;
  onSelectYear: (year: number) => void;
}

const YearSelector: React.FC<IYearSelectorProps> = ({
  title,
  styles,
  minDate,
  maxDate,
  textStyle,
  nextTitle,
  initialDate,
  currentMonth,
  headingLevel,
  onSelectYear,
  nextComponent,
  previousTitle,
  nextTitleStyle,
  previousComponent,
  restrictNavigation,
  previousTitleStyle,
  currentYear: propCurrentYear,
}) => {
  const [initialYear, setinitialYear ] = React.useState(0);

  React.useEffect(() => {
    setinitialYear(propCurrentYear);
  }, [propCurrentYear]);

  const handleOnYearViewPrevious = () => {
    setinitialYear(
      parseInt(
        Math.max(initialYear - 25, 0)
      )
    );
  }

  const handleOnYearViewNext = () => {
    setinitialYear(
      parseInt(initialYear + 25)
    );
  }

  return (
    <View styles={styles.calendar}>
      <YearsHeader
        title={title}
        styles={styles}
        minDate={minDate}
        maxDate={maxDate}
        year={initialYear}
        textStyle={textStyle}
        nextTitle={nextTitle}
        initialDate={initialDate}
        headingLevel={headingLevel}
        nextComponent={nextComponent}
        previousTitle={previousTitle}
        nextTitleStyle={nextTitleStyle}
        onYearViewNext={handleOnYearViewNext}
        previousComponent={previousComponent}
        restrictNavigation={restrictNavigation}
        previousTitleStyle={previousTitleStyle}
        onYearViewPrevious={handleOnYearViewPrevious}
      />
      <YearsGridView
        styles={styles}
        minDate={minDate}
        maxDate={maxDate}
        textStyle={textStyle}
        intialYear={initialYear}
        onSelectYear={onSelectYear}
        currentMonth={currentMonth}
        currentYear={propCurrentYear}
      />
    </View>
  );
}

export default YearSelector;
