import { createSelector } from "reselect";
import { initialState } from "../reducers/questions";

/**
 * Direct selector to the app state domain
 */

const selectQuestionDomain = (state) => state.questions || initialState;

const makeSelectQuestions = () =>
  createSelector(selectQuestionDomain, (substate) => substate.questions);

const makeSelectStatusFlags = () =>
  createSelector(selectQuestionDomain, (substate) => substate.statusFlags);

export { makeSelectQuestions, makeSelectStatusFlags };
