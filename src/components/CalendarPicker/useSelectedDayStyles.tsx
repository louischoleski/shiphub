import React from 'react';
import { isSameDay, isWithinInterval } from 'date-fns';

const useSelectedDayStyles = ({
  today,
  custom,
  styles,
  thisDay,
  dateOutOfRange,
  todayTextStyle,
  selectedEndDate,
  selectedStartDate,
  selectedRangeStyle,
  allowRangeSelection,
  propSelectedDayStyle,
  selectedRangeEndStyle,
  selectedRangeStartStyle,
  propSelectedDayTextStyle,
  isThisDateInSelectedRange,
  selectedRangeEndTextStyle,
  isThisDaySameAsSelectedEnd,
  selectedRangeStartTextStyle,
  isThisDaySameAsSelectedStart,
  // selectedDayStyle,
}) => React.useMemo(() => {
  let computedSelectedDayWrapperStyle = {};
  let computedSelectedDayStyle = styles.dayButton;
  let overrideOutOfRangeTextStyle;
  let selectedDayTextStyle = {};
  let selectedDayStyle;

  if (!dateOutOfRange || isThisDaySameAsSelectedStart || isThisDaySameAsSelectedEnd || isThisDateInSelectedRange) {
    const isToday = isSameDay(thisDay, today);

    if (isToday) {
      computedSelectedDayStyle = styles.selectedToday;
      selectedDayTextStyle = [todayTextStyle];
    }

    if (isToday && custom.style) {
      computedSelectedDayStyle = [styles.selectedToday, custom.style];
    }

    if (!allowRangeSelection && selectedStartDate && isThisDaySameAsSelectedStart) {
      computedSelectedDayStyle = styles.selectedDay;
      selectedDayStyle = propSelectedDayStyle || styles.selectedDayBackground;
      selectedDayTextStyle = [styles.selectedDayLabel, isToday && todayTextStyle, propSelectedDayTextStyle];
    }

    if (allowRangeSelection) {
      if (selectedStartDate && selectedEndDate) {
        // Date range start handler.
        if (isThisDaySameAsSelectedStart) {
          console.log('D')
          computedSelectedDayWrapperStyle = [styles.startDayPrefixWrapper];
          computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
          selectedDayTextStyle = [styles.selectedStartDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
        }

        // Date range end handler.
        if (isThisDaySameAsSelectedEnd) {
          console.log('C')
          computedSelectedDayWrapperStyle = [styles.startEndPrefixWrapper];
          computedSelectedDayStyle = [styles.endDayWrapper, selectedRangeStyle, selectedRangeEndStyle];
          selectedDayTextStyle = [styles.selectedEndDayLabel, propSelectedDayTextStyle, selectedRangeEndTextStyle];
        }

        if (isThisDaySameAsSelectedEnd && isThisDaySameAsSelectedStart && isSameDay(selectedEndDate, selectedStartDate)) {
          console.log('A')
          computedSelectedDayStyle = [styles.selectedDay, styles.selectedDayBackground, selectedRangeStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
        }

        if (!isThisDaySameAsSelectedEnd && !isThisDaySameAsSelectedStart && isWithinInterval(thisDay, { start: selectedStartDate, end: selectedEndDate })) {
          console.log('B')
          computedSelectedDayStyle = [styles.inRangeDay, selectedRangeStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle];
        }
      }

      if (selectedStartDate && !selectedEndDate && isThisDaySameAsSelectedStart) {
        console.log('E')
        overrideOutOfRangeTextStyle = selectedRangeStartTextStyle;
        computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
        selectedDayTextStyle = [styles.selectedDayRangeLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
      }
    }
  }

  return {
    selectedDayStyle,
    selectedDayTextStyle,
    computedSelectedDayStyle,
    overrideOutOfRangeTextStyle,
    computedSelectedDayWrapperStyle,
  };
}, [
  today,
  custom,
  styles,
  thisDay,
  todayTextStyle,
  dateOutOfRange,
  selectedEndDate,
  selectedStartDate,
  selectedRangeStyle,
  allowRangeSelection,
  propSelectedDayStyle,
  selectedRangeEndStyle,
  selectedRangeStartStyle,
  propSelectedDayTextStyle,
  isThisDateInSelectedRange,
  selectedRangeEndTextStyle,
  isThisDaySameAsSelectedEnd,
  selectedRangeStartTextStyle,
  isThisDaySameAsSelectedStart, 
]);

export default useSelectedDayStyles;
