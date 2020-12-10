import {act} from 'react-test-renderer';
import {Profile} from '../../screen';

const initialState = {
  data: [],
  loading: false,
  message: '',
  isSuccess: false,
  isFilled: false
};

const ChangePin = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'PIN_FILLED':
      return {
        ...state,
        loading: true,
        isFilled: true,
        data: action.payload,
      };
    case 'CHANGE_PIN_REQUEST':
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case 'CHANGE_PIN_REQUEST':
      return {
        ...state,
        loading: true,
        isSuccess: false,
      };
    case 'CHANGE_PIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        data: action.payload,
        isFilled: false
      };
    case 'CHANGE_PIN_FAILED':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        data: action.payload,
      };
    default:
      return {
        state,
        isSuccess: false,
        isFilled: false
      };
  }
};
export default ChangePin;
