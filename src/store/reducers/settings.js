import * as actionTypes from "../types";

export const settingsState = {
  timezone: "America/Toronto",
  timeformat: "YYYY-MM-DD HH:mm",
  locale: {
    lang: "en",
    country: "US",
  },
};

const settingsReducer = (state = settingsState, action) => {
  const { payload = null } = action;

  switch (action.type) {
    case actionTypes.LOCALE_SET:
      return {
        ...state,
        locale: {
          lang: action.lang,
          country: action.country,
        },
      };
    case actionTypes.TIMEZONE_SET:
      return {
        ...state,
        timezone: action.timezone,
      };
    case actionTypes.TIMEFORMAT_SET:
      return {
        ...state,
        timeformat: action.timeformat,
      };
    case actionTypes.SETTING_SET:
      return {
        ...state,
        // locale: {
        // 	lang: action.lang,
        // 	country: action.country,
        // },
        timezone: action.timezone,
        timeformat: action.timeformat,
      };
    default:
      return state;
  }
};

export default settingsReducer;
