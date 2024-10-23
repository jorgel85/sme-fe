import { call, put, takeEvery } from "redux-saga/effects";

import { LoginTypes } from "./actionType";
import {
  forgotPasswordFailed,
  forgotPasswordSuccess,
  loginFailed,
  loginSuccess,
  logoutUserFailed,
  logoutUserSuccess,
  resetPasswordFailed,
  resetPasswordSuccess,
  sendCodeFailed,
  sendCodeSuccess,
} from "./action";

import {
  patchResetPassword,
  postForgotPassword,
  postLogin,
  postLogout,
  postSendCode,
} from "../../../helpers/api_helper";

function* loginUser({ payload: { loginInfo, navigation } }: any) {
  try {
    const { accessToken, user } = yield call(postLogin, loginInfo);
    localStorage.setItem("authUser", JSON.stringify({ accessToken, user }));
    yield put(loginSuccess());
    navigation("/");
  } catch (error: any) {
    yield put(loginFailed(error.response.data.message));
  }
}

function* sendCode({ payload: { email, navigation } }: any) {
  try {
    yield call(postSendCode, { email });
    yield put(sendCodeSuccess());
    navigation("/verify-email");
  } catch (error: any) {
    yield put(sendCodeFailed(error.response.data.message));
  }
}

function* forgotPassword({ payload: { email } }: any) {
  try {
    yield call(postForgotPassword, { email });
    yield put(forgotPasswordSuccess());
  } catch (error: any) {
    yield put(forgotPasswordFailed(error.response.data.message));
  }
}

function* resetPassword({ payload: { resetPasswordInfo } }: any) {
  try {
    yield call(patchResetPassword, resetPasswordInfo);
    yield put(resetPasswordSuccess());
  } catch (error: any) {
    console.log("reset password error: ", error.response.data.message);
    yield put(resetPasswordFailed(error.response.data.message));
  }
}

function* logoutUser({ payload: { navigation } }: any) {
  try {
    yield call(postLogout, {});
    localStorage.removeItem("authUser");
    yield put(logoutUserSuccess());
    navigation("/");
  } catch (error: any) {
    yield put(logoutUserFailed(error.response.data.message));
  }
}

function* AuthSaga() {
  yield takeEvery(LoginTypes.LOGIN_USER, loginUser);
  yield takeEvery(LoginTypes.SEND_CODE, sendCode);
  yield takeEvery(LoginTypes.FORGOT_PASSWORD, forgotPassword);
  yield takeEvery(LoginTypes.RESET_PASSWORD, resetPassword);
  yield takeEvery(LoginTypes.LOGOUT_USER, logoutUser);
}

export default AuthSaga;
