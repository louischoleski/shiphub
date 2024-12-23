import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { isAfter, isBefore, isSameDay, startOfDay, differenceInDays, isWithinInterval } from 'date-fns';

export interface IRangeDuration {
  date: Date;
  minDuration: number;
}

export interface ICustomDateStyle {
  date: Date | string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  allowDisabled?: boolean;
  containerStyle?: ViewStyle;
}

export interface IDayProps {
  day: number;
  year: number;
  month: number;
  minDate?: Date;
  maxDate?: Date;
  styles: ViewStyle;
  textStyle?: TextStyle;
  enableDateChange?: boolean;
  todayTextStyle?: TextStyle;
  selectedDayStyle?: ViewStyle;
  allowRangeSelection?: boolean;
  selectedEndDate?: Date | null;
  selectedRangeStyle?: ViewStyle;
  selectedStartDate?: Date | null;
  selectedDayTextStyle?: TextStyle;
  selectedRangeEndStyle?: ViewStyle;
  disabledDatesTextStyle?: TextStyle;
  allowBackwardRangeSelect?: boolean;
  selectedRangeStartStyle?: ViewStyle;
  selectedRangeEndTextStyle?: TextStyle;
  selectedRangeStartTextStyle?: TextStyle;
  selectedDisabledDatesTextStyle?: TextStyle;
  minRangeDuration?: number | IRangeDuration[];
  maxRangeDuration?: number | IRangeDuration[];
  disabledDates?: number[] | ((date: Date) => boolean);
  onPressDay: (date: { year: number; month: number; day: number }) => void;
  customDatesStyles?: ICustomDateStyle[] | ((date: Date) => ICustomDateStyle | undefined);
}

const getCustomDateStyle = ({ customDatesStyles, date }) => {
  if (Array.isArray(customDatesStyles)) {
    return customDatesStyles.find(cds => isSameDay(date, new Date(cds.date))) || {};
  }

  if (typeof customDatesStyles === 'function') {
    return customDatesStyles(date) || {};
  }

  return {};
};

const isDateOutOfRange = ({
  thisDay,
  minDate,
  maxDate,
  disabledDates,
  selectedEndDate,
  minRangeDuration,
  maxRangeDuration,
  selectedStartDate,
  allowRangeSelection,
  allowBackwardRangeSelect
}) => {
  const startOfThisDay = startOfDay(thisDay);

  const isBeforeMin = minDate && isBefore(startOfThisDay, startOfDay(minDate));

  const isAfterMax = maxDate && isAfter(startOfThisDay, startOfDay(maxDate));

  const isDisabled = Array.isArray(disabledDates) && disabledDates.includes(thisDay.valueOf())
    || (typeof disabledDates === 'function' && disabledDates(thisDay));

  const isRangeOutOfBounds = allowRangeSelection && selectedStartDate && !selectedEndDate;

  let rangeOutOfBounds = false;

  if (isRangeOutOfBounds) {
    const daysDiff = differenceInDays(thisDay, selectedStartDate);

    const absDaysDiff = allowBackwardRangeSelect ? Math.abs(daysDiff) : daysDiff;

    if (maxRangeDuration && absDaysDiff > (Array.isArray(maxRangeDuration)
      ? maxRangeDuration.find(mrd => isSameDay(selectedStartDate, mrd.date))?.maxDuration
      : maxRangeDuration)) {
      rangeOutOfBounds = true;
    }

    if (minRangeDuration && absDaysDiff < (Array.isArray(minRangeDuration)
      ? minRangeDuration.find(mrd => isSameDay(selectedStartDate, mrd.date))?.minDuration
      : minRangeDuration)) {
      rangeOutOfBounds = true;
    }
  }

  return isBeforeMin || isAfterMax || isDisabled || rangeOutOfBounds;
};

const Day: React.FC<IDayProps> = ({
  day,
  year,
  month,
  styles,
  minDate,
  maxDate,
  textStyle,
  onPressDay,
  disabledDates,
  todayTextStyle,
  selectedEndDate,
  minRangeDuration,
  maxRangeDuration,
  enableDateChange,
  selectedStartDate,
  selectedRangeStyle,
  allowRangeSelection,
  selectedRangeEndStyle,
  customDatesStyles = [],
  disabledDatesTextStyle,
  selectedRangeStartStyle,
  allowBackwardRangeSelect,
  selectedRangeEndTextStyle,
  selectedRangeStartTextStyle,
  selectedDisabledDatesTextStyle,
  selectedDayStyle: propSelectedDayStyle,
  selectedDayTextStyle: propSelectedDayTextStyle,
}) => {
  const thisDay = new Date(year, month, day, 12);
  const today = new Date();

  const dateOutOfRange = React.useMemo(() => isDateOutOfRange({
    thisDay,
    minDate,
    maxDate,
    disabledDates,
    selectedEndDate,
    minRangeDuration,
    maxRangeDuration,
    selectedStartDate,
    allowRangeSelection,
    allowBackwardRangeSelect
  }), [thisDay, minDate, maxDate, disabledDates, allowRangeSelection, selectedStartDate, selectedEndDate, minRangeDuration, maxRangeDuration, allowBackwardRangeSelect]);

  const custom = React.useMemo(() => (
    getCustomDateStyle({ customDatesStyles, date: thisDay })
  ), [thisDay, customDatesStyles]);

  const isThisDaySameAsSelectedStart = React.useMemo(() => (
    isSameDay(thisDay, selectedStartDate)
  ), [thisDay, selectedStartDate]);

  const isThisDaySameAsSelectedEnd = React.useMemo(() => (
    isSameDay(thisDay, selectedEndDate)
  ), [thisDay, selectedEndDate]);

  const isThisDateInSelectedRange = React.useMemo(() => (
    selectedEndDate && 
    selectedStartDate && 
    isWithinInterval(thisDay, {
      start: selectedStartDate,
      end: selectedEndDate
    })
  ), [thisDay, selectedStartDate, selectedEndDate]);

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
        if (isThisDaySameAsSelectedStart) {
          computedSelectedDayStyle = [styles.startDayWrapper, selectedRangeStyle, selectedRangeStartStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeStartTextStyle];
        }

        if (isThisDaySameAsSelectedEnd) {
          computedSelectedDayStyle = [styles.endDayWrapper, selectedRangeStyle, selectedRangeEndStyle];
          selectedDayTextStyle = [styles.selectedDayLabel, propSelectedDayTextStyle, selectedRangeEndTextStyle];
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

    if (dateOutOfRange) {
      return (
        <View style={[styles.dayWrapper, custom.containerStyle]}>
          <View style={[custom.style, computedSelectedDayStyle, selectedDayStyle]}>
            <Text style={[styles.dayLabel, textStyle, styles.disabledText, disabledDatesTextStyle, styles.selectedDisabledText, selectedDisabledDatesTextStyle, overrideOutOfRangeTextStyle]}>
              {day}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={[styles.dayWrapper, custom.containerStyle]}>
        <TouchableOpacity disabled={!enableDateChange} onPress={() => onPressDay({ year, month, day })} style={[custom.style, computedSelectedDayStyle, selectedDayStyle]}>
          <Text style={[styles.dayLabel, textStyle, custom.textStyle, selectedDayTextStyle]}>
            {day}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!custom.allowDisabled) {
    custom.containerStyle = null;
    custom.textStyle = null;
    custom.style = null;
  }

  return (
    <View style={[styles.dayWrapper, custom.containerStyle]}>
      <View style={[styles.dayButton, custom.style]}>
        <Text style={[textStyle, styles.disabledText, disabledDatesTextStyle, custom.textStyle]}>
          {day}
        </Text>
      </View>
    </View>
  );
};

export default Day;
