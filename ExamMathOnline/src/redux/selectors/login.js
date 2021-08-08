import { createSelector } from "reselect";
import { initialState } from "../reducers/login";

/**
 * Direct selector to the app state domain
 */

const selectLoginDomain = (state) => {
  return state.login || initialState;
};

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.user);
const makeSelectIsSuccessLogin = () =>
  createSelector(selectLoginDomain, (substate) => substate.statusFlags);
const makeSelectError = () =>
  createSelector(selectLoginDomain, (substate) => substate.logs);

export { makeSelectLogin, makeSelectIsSuccessLogin, makeSelectError };
