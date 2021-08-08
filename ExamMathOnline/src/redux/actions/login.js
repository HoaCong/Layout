import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "../constants/login";
// Đăng nhập
export const login = (userInfo) => {
  return {
    type: LOGIN,
    userInfo,
  };
};
export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    message,
  };
};
// Đăng xuất
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
// Đăng ký
export const signup = (userInfo) => {
  return {
    type: SIGNUP,
    userInfo,
  };
};
export const signupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};
export const signupFailed = (message) => {
  return {
    type: SIGNUP_FAILED,
    message,
  };
};
