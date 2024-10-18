import {call, put, takeEvery} from 'redux-saga/effects';

import {RegisterTypes} from './actionTypes';
import {registerUserSuccess, registerUserFailed} from './action';

import {postRegister} from '../../../helpers/api_helper';

function* registerUser({payload: {registerInfo, navigation}}: any) {
  try {
    const {accessToken, user} = yield call(postRegister, registerInfo);
    console.log(accessToken, user);
    yield put(registerUserSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(registerUserFailed());
  }
}

function* authSaga() {
  yield takeEvery(RegisterTypes.REGISTER_USER, registerUser);
}

export default authSaga;
