import {act} from 'react-test-renderer';
import {Profile} from '../../screen';

const initialState = {
  data: [],
  loading: false,
  message: '',
  isSuccess: false,
};

const ChangePass = (state = initialState, action = {}) => {
  switch (action.type) {
        case 'CHANGE_PASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
        isSuccess: false
      };
    case 'CHANGE_PASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        data: action.payload,
      };
    case 'CHANGE_PASSWORD_FAILED':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        data: action.payload
      };
    default:
      return {
        state,
        isSuccess: false,
      };
  }
};
export default ChangePass;
