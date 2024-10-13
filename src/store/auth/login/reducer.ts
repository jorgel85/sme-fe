import { LoginTypes } from "./actionType";  

const initialState = {  
  error: "",  
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
      };  
    case LoginTypes.API_ERROR:  
      return {  
        ...state,  
        error: action.payload,  
        loading: false,  
      };  
    default:  
      return state;  
  }  
};  

export default login;
