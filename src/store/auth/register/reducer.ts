import {RegisterTypes} from './actionTypes';

const initialState = {
  error: false,
  loading: false,
  user: null,
};

const register = (state = initialState, action: any) => {
  switch (action.type) {
    case RegisterTypes.REGISTER_USER:
      state = {
        ...state,
        loading: true,
        error: false,
      };
      break;
    case RegisterTypes.REGISTER_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload,
        error: false,
      };
      break;
    case RegisterTypes.REGISTER_USER_FAILED:
      state = {
        ...state,
        user: null,
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
