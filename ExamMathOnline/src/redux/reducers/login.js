import produce from "immer";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
} from "../constants/login";
const user = JSON.parse(localStorage.getItem("isSignIn"));
export const initialState = {
  user: user ? user : [],
  statusFlags: {
    isLoading: false,
    isLoginSuccess: user ? true : false,
  },
  logs: {
    err: null,
  },
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case LOGIN_SUCCESS: {
        draft.user = action.payload;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = true;
        break;
      }
      case LOGIN_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = false;
        break;
      }
      case SIGNUP: {
        draft.statusFlags.isLoading = true;
        break;
      }
      case SIGNUP_SUCCESS: {
        draft.user = action.payload;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = true;
        break;
      }
      case SIGNUP_FAILED: {
        draft.logs.err = action.message;
        draft.statusFlags.isLoading = false;
        draft.statusFlags.isLoginSuccess = false;
        break;
      }
      // LOGOUT
      case LOGOUT: {
        draft.statusFlags.isLoginSuccess = false;
        localStorage.removeItem("isSignIn");
        break;
      }
    }
  });

export default loginReducer;
