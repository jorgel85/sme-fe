import {RegisterTypes} from './actionTypes';

const initialState = {
  error: false,
  loading: false,
};

const register = (state = initialState, action: any) => {
  switch (action.type) {
    case RegisterTypes.REGISTER_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case RegisterTypes.REGISTER_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: false,
      };
      break;
    case RegisterTypes.REGISTER_USER_FAILED:
      state = {
        ...state,
        loading: false,
        error: true,
      };
      break;
    default:
      state = {...state};
      break;
  }
  return state;
};

export default register;
