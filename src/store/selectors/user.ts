import { createSelector } from "reselect";

const userSelect = (state: any) => state.user;

export const selectUser = createSelector([userSelect], (user) => user);

export const isAuthenticated = createSelector(
  [userSelect],
  (user) => !!user.id,
);

export const isConfirmed = createSelector(
  [userSelect],
  (user) => !!user.isConfirmed,
);

export const selectUserHasWorkspace = createSelector([userSelect], (user) =>
  Boolean(Array.isArray(user.workspaces) && user.workspaces?.length),
);

export default {
  // selectUser,
  isConfirmed,
  isAuthenticated,
  selectUserHasWorkspace
}