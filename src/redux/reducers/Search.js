
const initialState = {
    data: [],
    loading: false,
  };
  
 export const getSearch = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_SEARCH_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_SEARCH_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_SEARCH_ERROR':
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
 export const getSearchTransfer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_SEARCHTRANSFER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_SEARCHTRANSFER_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'GET_SEARCHTRANSFER_ERROR':
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
 
  