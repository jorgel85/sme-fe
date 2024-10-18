import { all, fork } from "redux-saga/effects"

import loginSaga from "./auth/login/saga";
import registerSaga from "./auth/register/saga";

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(registerSaga)]);
}
