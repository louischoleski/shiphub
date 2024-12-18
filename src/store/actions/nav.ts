import * as actionTypes from "../types";

export const setNavOrigin = (payload: any) => ({
  type: actionTypes.NAV_ORIGIN_SET,
  payload,
});

export const setNavDestination = (payload: any) => ({
  type: actionTypes.NAV_DESTINATION_SET,
  payload,
});

export const setNavTime = (payload: any) => ({
  type: actionTypes.NAV_TIME_SET,
  payload,
});
