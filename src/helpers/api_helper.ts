import { post, patch } from "./rest_helper";
import * as url from "./url_helper";

// auth
const postLogin = (data: any) => post(url.POST_LOGIN, data);
const postLogout = (data: any) => post(url.POST_LOGOUT, data);
const postSendCode = (data: any) => post(url.POST_SEND_CODE, data);
const postForgotPassword = (data: any) => post(url.POST_FORGOT_PASSWORD, data);
const patchResetPassword = (data: any) => patch(url.PATCH_RESET_PASSWORD, data);
const postRegister = (data: any) => post(url.POST_REGISTER, data);

export {
  postLogin,
  postLogout,
  postSendCode,
  postRegister,
  postForgotPassword,
  patchResetPassword,
};
