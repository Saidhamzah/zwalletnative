
const initialState = {
    data: [],
    loading: false,
  };
  
 export const getDevice = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'GET_DEVICE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'GET_DEVICE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      default:
        return state
    }
  };
 
  