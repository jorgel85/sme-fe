import { LoginTypes } from "./actionType";

export const loginUser = (loginInfo: any, navigation: any) => {
  return {
    type: LoginTypes.LOGIN_USER,
    payload: { loginInfo, navigation },
  };
};

export const loginSuccess = () => {
  return {
    type: LoginTypes.LOGIN_SUCCESS,
  };
};

export const loginFailed = (error: any) => {
  return {
    type: LoginTypes.LOGIN_FAILED,
    payload: error,
  };
};

export const logoutUser = (navigation: any) => {
  return {
    type: LoginTypes.LOGOUT_USER,
    payload: { navigation },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LoginTypes.LOGOUT_USER_SUCCESS
  };
};

export const logoutUserFailed = (error: any) => {
  return {
    type: LoginTypes.LOGOUT_USER_FAILED,
    payload: error,
  };
};

export const sendCode = (email: string, navigation: any) => {
  return {
    type: LoginTypes.SEND_CODE,
    payload: { email, navigation },
  };
};

export const sendCodeSuccess = () => {
  return {
    type: LoginTypes.SEND_CODE_SUCCESS
  };
};

export const sendCodeFailed = (error: any) => {
  return {
    type: LoginTypes.SEND_CODE_FAILED,
    payload: error,
  };
};

export const forgotPassword = (email: string) => {
  return {
    type: LoginTypes.FORGOT_PASSWORD,
    payload: { email },
  };
};

export const forgotPasswordSuccess = () => {
  return {
    type: LoginTypes.FORGOT_PASSWORD_SUCCESS,
  };
};

export const forgotPasswordFailed = (error: any) => {
  return {
    type: LoginTypes.FORGOT_PASSWORD_FAILED,
    payload: error,
  };
};

export const resetPassword = (resetPasswordInfo: any) => {
  return {
    type: LoginTypes.RESET_PASSWORD,
    payload: { resetPasswordInfo },
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: LoginTypes.RESET_PASSWORD_SUCCESS,
  };
};

export const resetPasswordFailed = (error: any) => {
  return {
    type: LoginTypes.RESET_PASSWORD_FAILED,
    payload: error,
  };
};

export const verifyEmail = (verifyInfo: any, navigation: any) => {
  return {
    type: LoginTypes.VERIFY_EMAIL,
    payload: { verifyInfo, navigation },
  };
};

export const verifyEmailSuccess = () => {
  return {
    type: LoginTypes.VERIFY_EMAIL_SUCCESS
  };
};

export const verifyEmailFailed = (error: any) => {
  return {
    type: LoginTypes.VERIFY_EMAIL_FAILED,
    payload: error,
  };
};

export const socialLogin = (type: any, navigation: any) => {
  return {
    type: LoginTypes.SOCIAL_LOGIN,
    payload: { type, navigation },
  };
};
