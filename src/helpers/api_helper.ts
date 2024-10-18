import { post } from "./rest_helper";
import * as url from "./url_helper";

// auth
const postLogin = (data: any) => post(url.POST_LOGIN, data);
const postRegister = (data: any) => post(url.POST_REGISTER, data);


export { postLogin, postRegister };
