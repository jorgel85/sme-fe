import { combineReducers } from "redux";

//Login
import Login from "./auth/login/reducer";

const rootReducer = combineReducers({
  Login,
});

export default rootReducer;
