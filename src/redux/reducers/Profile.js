import { Profile } from "../../screen";

const initialState = {
    data: [],
    loading: false,
    isSuccess: false,
  };
  
  const ProfileNumber = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'PROFILE_NUMBER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'PROFILE_NUMBER_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload
        };
      case 'PROFILE_NUMBER_ERROR':
        return {
          ...state,
          loading: false,
          data:[],
          error: action.payload
        };
      case 'ADD_NUMBER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'ADD_NUMBER_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
          isSuccess: true
        };
      case 'ADD_NUMBER_ERROR':
        return {
          ...state,
          loading: false,
          data:[],
          error: action.payload,
          isSuccess: true
        };
      case 'EDIT_PROFILE_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'EDIT_PROFILE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload,
          isSuccess: true
        };
      case 'EDIT_PROFILE_ERROR':
        return {
          ...state,
          loading: false,
          data:[],
          error: action.payload,
          isSuccess: true
        };
      default:
        return state
    }
  };
  export default ProfileNumber;
  