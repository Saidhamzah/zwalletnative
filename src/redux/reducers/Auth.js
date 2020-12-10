const initialState = {
    data: [],
    loading: false,
    isLogin: false,
    message:''
  };
  
  const Auth = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'FORM_FILLED':
        return {
          ...state,
          loading: true,
          data: action.payload,
        };
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'LOGIN_SUCCESS':
        // console.log(action.payload.data,'reducer')
        return {
          ...state,
          loading: false,
          isLogin: true,
          data: action.payload,
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          message: action.payload
        };
      case 'LOGOUT':
        return {
          ...state,
          loading: false,
          isLogin: false,
          message:'',
          data:[],
          _persist: {
            rehydrated: true,
            version: -1
          }
        };
      case 'Register_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'Register_SUCCESS':
        return {
          ...state,
          loading: false,
          isRegister: true,
          data: action.payload
        };
      case 'Register_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          isRegister: false,
          message: action.payload
        };
      default:
        return state
    }
  };
  export default Auth;
  