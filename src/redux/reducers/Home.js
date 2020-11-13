
const initialState = {
    data: [],
    loading: false,
  };
  
 export const getHome = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_HOME_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_HOME_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_HOME_ERROR':
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
 
  