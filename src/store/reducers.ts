import { combineReducers } from "redux";

import Login from "./auth/login/reducer";
import Register from "./auth/register/reducer";

const rootReducer = combineReducers({
  Login,
  Register,
});

export default rootReducer;
