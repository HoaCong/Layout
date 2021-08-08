import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN, SIGNUP } from "../constants/login";
import _get from "lodash/get";
import _find from "lodash/find";
import {
  loginFailed,
  loginSuccess,
  signupSuccess,
  signupFailed,
} from "../actions/login";

function fetchUser() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/users",
  });
}

function* loginSagaFunc(userInfo) {
  const user = userInfo.userInfo;
  const response = yield call(fetchUser);
  const userData = _get(response, "data", []);
  let findOut = _find(
    userData,
    (i) =>
      (i.numberphone === user.username || i.email === user.username) &&
      i.password === user.password
  );
  if (findOut) {
    localStorage.setItem("isSignIn", JSON.stringify(findOut));
    yield put(loginSuccess(findOut));
  } else {
    yield put(loginFailed("Sai tài khoản hoặc mật khẩu"));
  }
}
function postUser(userInfor) {
  axios.post("http://localhost:5000/users", userInfor);
}
function* signupSagaFunc(userInfo) {
  const user = userInfo.userInfo;
  const response = yield call(fetchUser);
  const userData = _get(response, "data", []);
  let isExistUser = _find(
    userData,
    (i) => i.numberphone === user.numberphone || i.email === user.email
  );
  if (!isExistUser) {
    postUser(userInfo.userInfo);
    localStorage.setItem("isSignIn", JSON.stringify(userInfo.userInfo));
    yield put(signupSuccess(userInfo.userInfo));
  } else {
    yield put(signupFailed("Tên đăng nhập đã tồn tại"));
  }
}
export default function* loginSaga() {
  yield takeLatest(LOGIN, loginSagaFunc);
  yield takeLatest(SIGNUP, signupSagaFunc);
}
