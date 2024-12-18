import { combineReducers } from "redux";

import appReducer, { appState } from "./reducers/app";
import navReducer, { navState } from "./reducers/nav";
import userReducer, { userState } from "./reducers/user";
import settingsReducer, { settingsState } from "./reducers/settings";
import workspaceReducer, { workspaceState } from "./reducers/workspace";

// Combine all states.
export const preloadedState = {
  app: appState,
  nav: navState,
  user: userState,
  settings: settingsState,
  workspace: workspaceState,
};

// Combine all reducers.
const rootReducer = combineReducers({
  app: appReducer,
  nav: navReducer,
  user: userReducer,
  settings: settingsReducer,
  workspace: workspaceReducer,
});

export default rootReducer;
