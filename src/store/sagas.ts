import { all, fork } from "redux-saga/effects"

//Login
import AuthSaga from "./auth/login/saga";

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
  ])
}
