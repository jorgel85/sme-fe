import { call, put, takeEvery } from "redux-saga/effects";

import { LoginTypes } from "./actionType";
import { apiError, loginSuccess } from "./action";

import { postLogin } from "../../../helpers/backend_helper";

function* loginUser({ payload: { user, history } }: any) {
  try {
    const response: Promise<any> = yield call(postLogin, user);
    localStorage.setItem("authUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history("/");
  } catch (error: any) {
    yield put(apiError(error.response.data.message));
  }
}

function* logoutUser({ payload: { history } }: any) {
  try {
    localStorage.removeItem("authUser");
    history("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}
function* AuthSaga() {
  yield takeEvery(LoginTypes.LOGIN_USER, loginUser);
  yield takeEvery(LoginTypes.LOGOUT_USER, logoutUser);
}

export default AuthSaga;
