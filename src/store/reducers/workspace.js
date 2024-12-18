import * as actionTypes from "../types";

export const workspaceState = {
  _id: "",
  name: "",
  createdAt: "",
  removed: false,
  enabled: false,
  invitedBy: null,
  role: { id: "", name: "" },
};

const workspaceReducer = (state = workspaceState, action) => {
  switch (action.type) {
    case actionTypes.WORKSPACE_CLEAR:
      return { ...state, ...workspaceState };
    case actionTypes.WORKSPACE_SET:
      return { ...state, ...action.workspace };
    case actionTypes.WORKSPACE_FETCHED:
      return { ...state, ...action.workspace };
    default:
      return state;
  }
};

export default workspaceReducer;
