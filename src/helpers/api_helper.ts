import { post } from "./rest_helper";
import * as url from "./url_helper";

// login
const postLogin = (data: any) => post(url.POST_LOGIN, data);


export { postLogin };
