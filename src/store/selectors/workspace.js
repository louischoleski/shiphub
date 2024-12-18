import { createSelector } from "reselect";

const workspaceSelect = (state) => state.workspace;

export const selectWorkspace = createSelector(
  [workspaceSelect],
  (workspace) => workspace,
);

// export const isVerified = createSelector([workspaceSelect], (workspace) => !!workspace.isVerified;
