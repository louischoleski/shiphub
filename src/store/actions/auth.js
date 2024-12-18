import * as actionTypes from "../types";

export const userLoggedIn = (user) => ({
  type: actionTypes.USER_LOGGED_IN,
  user,
});

export const userLoggedOut = (user) => ({
  type: actionTypes.USER_LOGGED_OUT,
  user,
});
