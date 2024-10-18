import {RegisterTypes} from './actionTypes';

export const registerUser = (registerInfo: any, navigation: any) => {
  return {
    type: RegisterTypes.REGISTER_USER,
    payload: {registerInfo, navigation},
  };
};

export const registerUserSuccess = (user: any) => {
  return {
    type: RegisterTypes.REGISTER_USER_SUCCESS,
    payload: user,
  };
};

export const registerUserFailed = () => {
  return {
    type: RegisterTypes.REGISTER_USER_FAILED,
  };
};
