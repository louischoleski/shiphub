import * as actionTypes from "../types";

export const appLoading = (app) => ({
  type: actionTypes.APP_LOADING,
  app,
});

export const loadingApp =
  (loading = false) =>
  (dispatch) =>
    dispatch(appLoading({ loading }));
