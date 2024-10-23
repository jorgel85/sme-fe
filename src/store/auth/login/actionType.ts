/**
 *  interface for Login Type
 */
export enum LoginTypes {
  LOGIN_USER = "@@login/LOGIN_USER",
  LOGIN_SUCCESS = "@@login/LOGIN_SUCCESS",
  LOGIN_FAILED = "@@login/LOGIN_FAILED",
  LOGOUT_USER = "@@login/LOGOUT_USER",
  LOGOUT_USER_SUCCESS = "@@login/LOGOUT_USER_SUCCESS",
  LOGOUT_USER_FAILED = "@@login/LOGOUT_USER_FAILED",
  SEND_CODE = "@@login/SEND_CODE",
  SEND_CODE_SUCCESS = "@@login/SEND_CODE_SUCCESS",
  SEND_CODE_FAILED = "@@login/SEND_CODE_FAILED",
  FORGOT_PASSWORD = "@@login/FORGOT_PASSWORD",
  FORGOT_PASSWORD_SUCCESS = "@@login/FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAILED = "@@login/FORGOT_PASSWORD_FAILED",
  RESET_PASSWORD = "@@login/RESET_PASSWORD",
  RESET_PASSWORD_SUCCESS = "@@login/RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILED = "@@login/RESET_PASSWORD_FAILED",
  VERIFY_EMAIL = "@@login/VERIFY_EMAIL",
  VERIFY_EMAIL_SUCCESS = "@@login/VERIFY_EMAIL_SUCCESS",
  VERIFY_EMAIL_FAILED = "@@login/VERIFY_EMAIL_FAILED",
  SOCIAL_LOGIN = "@@login/SOCIAL_LOGIN",
}
