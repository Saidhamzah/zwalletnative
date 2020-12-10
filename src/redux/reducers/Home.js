
const initialState = {
    data: [],
    loading: false,
    message: ''
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
          data: action.payload,
          message:''
        };
      case 'GET_HOME_ERROR':
        return {
          ...state,
          loading: false,
          message: 'empty'
        };
      case 'GET_HOME_DEFAULT':
        return {
          ...state
        };
      default:
        return state
    }
  };
 
  