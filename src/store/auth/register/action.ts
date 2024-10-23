import {RegisterTypes} from './actionTypes';

export const registerUser = (registerInfo: any, navigation: any) => {
  return {
    type: RegisterTypes.REGISTER_USER,
    payload: {registerInfo, navigation},
  };
};

export const registerUserSuccess = () => {
  return {
    type: RegisterTypes.REGISTER_USER_SUCCESS,
  };
};

export const registerUserFailed = () => {
  return {
    type: RegisterTypes.REGISTER_USER_FAILED,
  };
};
