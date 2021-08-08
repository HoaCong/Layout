import { all } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import questionSaga from "./questionSaga";

export default function* rootSaga() {
  yield all([loginSaga(), questionSaga()]);
}
