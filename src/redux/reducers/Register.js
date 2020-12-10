import {act} from 'react-test-renderer';
import {Profile} from '../../screen';

const initialState = {
  data: [],
  loading: false,
  isSuccess: false,
  message: '',
  isPinSuccess: false,
};

const Register = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case 'CREATE_PIN_REQUEST':
      return {
        ...state,
        loading: true,
        isPinSuccess: false,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: true,
        data: action.payload,
      };
    case 'CREATE_PIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isSuccess: false,
        data: action.payload,
        isPinSuccess: true,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.payload,
      };
    case 'CREATE_PIN_FAILED':
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: action.payload,
        isPinSuccess: false,
      };
    default:
      return {
        state,
        isSuccess: false,
      };
  }
};
export default Register;
