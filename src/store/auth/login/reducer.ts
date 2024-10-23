import { LoginTypes } from "./actionType";

const initialState = {
  error: {
    login: "",
    logout: "",
    sendCode: "",
    forgotPassword: "",
    resetPassword: "",
  },
  loading: false,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginTypes.LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { ...state.error, login: "" },
      };
    case LoginTypes.LOGIN_FAILED:
      return {
        ...state,
        error: { ...state.error, login: action.payload },
        loading: false,
      };
    case LoginTypes.LOGOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { ...state.error, logout: "" },
      };
    case LoginTypes.LOGOUT_USER_FAILED:
      return {
        ...state,
        error: { ...state.error, logout: action.payload },
        loading: false,
      };
    case LoginTypes.SEND_CODE:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.SEND_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { ...state.error, sendCode: "" },
      };
    case LoginTypes.SEND_CODE_FAILED:
      return {
        ...state,
        error: { ...state.error, sendCode: action.payload },
        loading: false,
      };
    case LoginTypes.FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { ...state.error, forgotPassword: "" },
      };
    case LoginTypes.FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        error: { ...state.error, forgotPassword: action.payload },
        loading: false,
      };
    case LoginTypes.RESET_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case LoginTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { ...state.error, resetPassword: "" },
      };
    case LoginTypes.RESET_PASSWORD_FAILED:
      return {
        ...state,
        error: { ...state.error, resetPassword: action.payload },
        loading: false,
      };
    default:
      return state;
  }
};

export default login;
