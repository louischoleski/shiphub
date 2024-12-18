import * as actionTypes from "../types";

export const userFetched = (user) => ({
  type: actionTypes.USER_FETCHED,
  user,
});
