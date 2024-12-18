import * as actionTypes from "../types";

export const workspaceClear = () => {
  return {
    type: actionTypes.WORKSPACE_CLEAR,
  };
};

export const workspaceSet = (workspace) => {
  return {
    type: actionTypes.WORKSPACE_SET,
    workspace,
  };
};

export const workspaceFetched = (workspace) => ({
  type: actionTypes.WORKSPACE_FETCHED,
  workspace,
});
