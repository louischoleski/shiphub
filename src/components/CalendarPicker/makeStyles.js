const DEFAULT_SELECTED_TEXT_COLOR = '#212529';
const DEFAULT_SELECTED_START_END_TEXT_COLOR = '#FFF';

const DEFAULT_TODAY_BACKGROUND_COLOR = '#DFEEFF';
const DEFAULT_SELECTED_BACKGROUND_COLOR = '#DFEEFF';
const DEFAULT_SELECTED_START_END_BACKGROUND_COLOR = '#007BFF';

const getBorderRadiusByShape = (scaler, dayShape) => {
  if (dayShape === 'square') {
    return 0;
  } else {
    return 30*scaler;
  }
}

export const makeStyles = ({
  dayShape,
  scaleFactor,
  containerWidth,
  containerHeight,
  selectedDayColor,
  selectedDayTextColor,
  todayBackgroundColor,
}) => {
  const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
  const SELECTED_BG_COLOR = selectedDayColor ? selectedDayColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = selectedDayTextColor ? selectedDayTextColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    containerWidth,
    containerHeight,

    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 30*scaler,
      height: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
    },

    dayLabel: {
      color: '#000',
      alignSelf: 'center',
      fontSize: 14*scaler,
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    selectedDayRangeLabel: {
      color: DEFAULT_SELECTED_START_END_TEXT_COLOR,
    },
  
    selectedStartDayLabel: {
      color: DEFAULT_SELECTED_START_END_TEXT_COLOR,
    },

    selectedEndDayLabel: {
      color: DEFAULT_SELECTED_START_END_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      alignSelf: 'center',
      flexDirection: 'row',
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      fontSize: 12*scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 30*scaler,
      height:30*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 30*scaler,
      height:30*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
    },

    dayWrapper: {
      width: 50*scaler,
      height: 40*scaler,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    startDayPrefixWrapper: {
      zIndex: 1,
      left: 25*scaler,
      width: 30*scaler,
      height: 30*scaler,
      position: 'absolute',
      backgroundColor: SELECTED_BG_COLOR,
    },

    startEndPrefixWrapper: {
      zIndex: 1,
      right: 25*scaler,
      width: 30*scaler,
      height: 30*scaler,
      position: 'absolute',
      backgroundColor: SELECTED_BG_COLOR,
    },

    //
    startDayWrapper: {
      zIndex: 2,
      width: 30*scaler,
      height: 30*scaler,
      alignSelf: 'center',
      borderRadius: 20*scaler,
      justifyContent: 'center',
      // width: 50*scaler,
      // borderTopLeftRadius: 20*scaler,
      // borderBottomLeftRadius: 20*scaler,
      // backgroundColor: SELECTED_BG_COLOR,
      backgroundColor: DEFAULT_SELECTED_START_END_BACKGROUND_COLOR,
    },

    endDayWrapper: {
      zIndex: 2,
      width: 30*scaler,
      height: 30*scaler,
      alignSelf: 'center',
      borderRadius: 20*scaler,
      justifyContent: 'center',
      // width: 50*scaler,
      // borderTopRightRadius: 20*scaler,
      // borderBottomRightRadius: 20*scaler,
      // backgroundColor: SELECTED_BG_COLOR,
      backgroundColor: DEFAULT_SELECTED_START_END_BACKGROUND_COLOR,
    },

    inRangeDay: {
      width: 50*scaler,
      height: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: SELECTED_BG_COLOR,
    },

    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: containerWidth,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      marginBottom: 10*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthYearHeaderWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 3*scaler,
    },

    previousContainer: {
      marginLeft: 10*scaler,
    },

    nextContainer: {
      marginRight: 10*scaler,
      alignItems: 'flex-end',
    },

    navButtonText: {
      fontSize: 14*scaler,
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDisabledText: {
      fontSize: 14*scaler,
      color: '#DDDDDD',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthHeaderMainText: {
      color: '#000',
      textAlign: 'right',
      fontSize: 12*scaler,
      marginHorizontal: 10*scaler,
    },

    monthButton: {
      width: 30*scaler,
      height: 30*scaler,
      alignSelf: 'center',
      borderRadius: 30*scaler,
      justifyContent: 'center',
    },

    monthsHeaderText: {
      flex: 1,
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'center'
    },

    monthContainer: {
      flex: 1,
      alignItems: 'center',
    },

    monthText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    monthsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    monthsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

    yearHeaderMainText: {
      color: '#000',
      fontSize: 12*scaler,
      marginHorizontal: 12*scaler,
      // backgroundColor: 'blue',
    },

    yearContainer: {
      flex: 1,
      alignItems: 'center',
    },

    yearText: {
      color: '#000',
      alignSelf: 'center',
      fontSize: 14*scaler,
    },

    yearsHeaderText: {
      fontSize: 16*scaler,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    yearsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    yearsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },
    
    carretWrapper: {
      paddingLeft: 4,
      paddingBottom: 2,
      alignSelf: 'center',
      justifyContent: 'center',
    }
  };
}
