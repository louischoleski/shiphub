import { createSelector } from "reselect";

export const selectSettings = (state) => state.settings;

export const selectTimeSettings = createSelector(
  [selectSettings],
  (settings) => ({
    timezone: settings?.timezone,
    timeformat: settings?.timeformat,
  }),
);

export const selectCurrentSettings = createSelector(
  [selectSettings],
  (settings) => settings,
);

export const selectLocaleSettings = createSelector(
  [selectCurrentSettings],
  (settings) => settings.locale,
);
