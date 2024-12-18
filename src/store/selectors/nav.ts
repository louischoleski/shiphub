import { createSelector } from "reselect";

const navSelect = (state: any) => state.nav;

// export const selectNav = createSelector([navSelect], (nav) => nav.origin);

export const selectNavTime = createSelector([navSelect], (nav) => nav.time);

export const selectNavOrigin = createSelector([navSelect], (nav) => nav.origin);

export const selectNavDestination = createSelector([navSelect], (nav) => nav.destination);

export default {
    // selectNav,
    selectNavTime,
    selectNavOrigin,
    selectNavDestination
}