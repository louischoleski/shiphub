import * as React from 'react';
import { getYear } from 'date-fns/getYear';
import Svg, { Path } from 'react-native-svg';
import { getMonth } from 'date-fns/getMonth';
import { isSameDay } from 'date-fns/isSameDay';
import { isSameMonth } from 'date-fns/isSameMonth';

export const getDaysInMonth = (month: number, year: number) => {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}

export const isSameMonthAndYear = (date: Date, month: number, year: number) => {
  if (date) {
    return getMonth(date) === month && getYear(date) === year;
  }

  return false;
}

// Test whether objects' values are different.
// `exclusions` param ignores provided keys.
// Returns array of keys that are different (empty array means identical).
export const shallowDiff = (a, b, exclusions = []) => {
  const diffs = [];

  for (let key of Object.keys(a)) {
    if (exclusions.includes(key)) {
      continue;
    }

    if (a[key] !== b[key]) {
      diffs.push(key);
    }
  }

  return diffs;
}

// Robust compare Moment dates.
export const compareDates = (a, b, granularity) => {
  // Allow for falsy (null & undefined) equality.
  if (!a && !b) {
    return true;
  }

  if (granularity === 'day') {
    return !!a && !!b && isSameDay(a, b);
  }

  if (granularity === 'month') {
    return !!a && !!b && isSameMonth(a, b);
  }

  return true;
}

export const getWeekdays = (firstDay: number = 0) => {
  let from = firstDay;

  const weekdays = [];

  for (let i = 0; i < Utils.WEEKDAYS.length; i++) {
    weekdays.push(Utils.WEEKDAYS[from]);
    from = from >= Utils.WEEKDAYS.length - 1 ? 0 : from + 1;
  }

  return weekdays;
}

export const getISOWeekdaysOrder = (firstDay: number = 0) => {
  let _from = firstDay === 0 ? 7 : firstDay;

  const order = [];

  for (let i = 0; i < Utils.WEEKDAYS.length; i++) {
    order.push(_from);
    _from = _from >= Utils.WEEKDAYS.length ? 1 : _from + 1;
  }

  return order;
}

export const Utils = {
  END_DATE: 'END_DATE',
  START_DATE: 'START_DATE',
  WEEKDAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  MONTHS: [
    'January', 'February', 
    'March', 'April', 'May', 
    'June', 'July', 'August', 
    'September', 'October', 
    'November', 'December'
  ],
  MAX_ROWS: 7,
  MAX_COLUMNS: 7,
  FIRST_DAY_OFFSETS: [0, -1, 5, 4, 3, 2, 1],
  shallowDiff,
  getWeekdays,
  compareDates,
  getDaysInMonth,
  isSameMonthAndYear,
  getISOWeekdaysOrder,
};

export const CarretIcon = () => (
  <Svg
    width={8}
    height={5}
    fill="none"
    viewBox="0 0 8 5"
  >
    <Path
      d="M4 3.54289L1.45711 1H6.54289L4 3.54289Z"
      fill="#212529"
      stroke="black"
    />
  </Svg>
);
