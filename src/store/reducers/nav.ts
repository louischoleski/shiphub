import * as actionTypes from "../types";

export const navState = {
  time: null,
  origin: null,
  destination: null,
};

const navReducer = (state = navState, action) => {
  switch (action.type) {
    case actionTypes.NAV_TIME_SET:
      return { ...state, time: action.payload };
    case actionTypes.NAV_ORIGIN_SET:
      return { ...state, origin: action.payload };
    case actionTypes.NAV_DESTINATION_SET:
      return { ...state, destination: action.payload };
    default:
      return state;
  }
};

export default navReducer;
