import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import _get from "lodash/get";
import {
  getListQuestionSuccess,
  getListQuestionFailure,
} from "../actions/questions";
import { GET_LIST_QUESTION } from "../constants/questions";

// function that makes the api request and returns a Promise for response
function fetchQuestions() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/list_question",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* callApiQuestions() {
  try {
    const response = yield call(fetchQuestions);
    const data = _get(response, "data", []);
    yield put(getListQuestionSuccess(data));
  } catch (error) {
    yield put(getListQuestionFailure(error));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* userSaga() {
  yield takeLatest(GET_LIST_QUESTION, callApiQuestions);
}
