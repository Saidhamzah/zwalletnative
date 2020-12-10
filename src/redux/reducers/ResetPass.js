import {act} from 'react-test-renderer';
import {Profile} from '../../screen';

const initialState = {
  data: [],
  loading: false,
  isFilled: false,
  message: '',
  isSuccess: false,
};

const ResetPass = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'EMAIL_FILLED':
      return {
        ...state,
        loading: true,
        isFilled: true,
        data: action.payload,
      };
    case 'RESET_PASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
        isFilled: true,
        isSuccess: false
      };
    case 'RESET_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        data: action.payload,
      };
    case 'RESET_PASSWORD_FAILED':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        data: action.payload
      };
    case 'RESET_PASSWORD_DEFAULT':
      return {
        state
      };
    default:
      return {
        state,
        isSuccess: false,
      };
  }
};
export default ResetPass;
