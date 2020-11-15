
const initialState = {
    data: [],
    loading: false,
  };
  
 export const getSearch = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_Search_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_Search_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_Search_ERROR':
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
 
  