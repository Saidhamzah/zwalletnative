
const initialState = {
    data: [],
    loading: false,
  };
  
 export const getHistory = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_HISTORY_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_HISTORY_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_HISTORY_ERROR':
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
 
  