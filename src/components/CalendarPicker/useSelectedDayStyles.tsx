import React from 'react';
import { isSameDay, isWithinInterval } from 'date-fns';

const useSelectedDayStyles = ({
  thisDay,
  today,
  selectedStartDate,
  selectedEndDate,
  allowRangeSelection,
  dateOutOfRange,
  isThisDaySameAsSelectedStart,
  isThisDaySameAsSelectedEnd,
  isThisDateInSelectedRange,
  propSelectedDayStyle,
  propSelectedDayTextStyle,
  custom,
  styles,
  selectedRangeStyle,
  selectedRangeStartStyle,
  selectedRangeEndStyle,
  selectedRangeStartTextStyle,
  selectedRangeEndTextStyle,
  todayTextStyle,
  // selectedDayStyle,
}) => {
  return React.useMemo(() => {
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
          // Start date
          if (isThisDaySameAsSelectedStart) {
            computedSelectedDayWrapperStyle = [styles.startDayPrefixWrapper];
            computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
            selectedDayTextStyle = [styles.selectedStartDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
          }

          // End date
          if (isThisDaySameAsSelectedEnd) {
            computedSelectedDayWrapperStyle = [styles.startEndPrefixWrapper];
            computedSelectedDayStyle = [styles.endDayWrapper, selectedRangeStyle, selectedRangeEndStyle];
            selectedDayTextStyle = [styles.selectedEndDayLabel, propSelectedDayTextStyle, selectedRangeEndTextStyle];
          }

          if (isThisDaySameAsSelectedEnd && isThisDaySameAsSelectedStart && isSameDay(selectedEndDate, selectedStartDate)) {
            computedSelectedDayStyle = [styles.selectedDay, styles.selectedDayBackground, selectedRangeStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
          }

          if (!isThisDaySameAsSelectedEnd && !isThisDaySameAsSelectedStart && isWithinInterval(thisDay, { start: selectedStartDate, end: selectedEndDate })) {
            computedSelectedDayStyle = [styles.inRangeDay, selectedRangeStyle];
            selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle];
          }
        }

        if (selectedStartDate && !selectedEndDate && isThisDaySameAsSelectedStart) {
          overrideOutOfRangeTextStyle = selectedRangeStartTextStyle;
          computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
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
    thisDay,
    today,
    selectedStartDate,
    selectedEndDate,
    allowRangeSelection,
    dateOutOfRange,
    isThisDaySameAsSelectedStart,
    isThisDaySameAsSelectedEnd,
    isThisDateInSelectedRange,
    propSelectedDayStyle,
    propSelectedDayTextStyle,
    custom,
    styles,
    selectedRangeStyle,
    selectedRangeStartStyle,
    selectedRangeEndStyle,
    selectedRangeStartTextStyle,
    selectedRangeEndTextStyle,
    todayTextStyle,
  ]);
};

export default useSelectedDayStyles;
