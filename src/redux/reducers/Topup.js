
const initialState = {
    data: [],
    loading: false,
  };
  
 export const Topup = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_TOPUP_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_TOPUP_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_TOPUP_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          error: action.payload
        };
      default:
        return state
    }
  };
 
  