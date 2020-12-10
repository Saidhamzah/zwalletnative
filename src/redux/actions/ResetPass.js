import Axios from 'axios';
import {APIuri} from '../../utils';

export const emailFilled = (data) => {
  return {
    type: 'EMAIL_FILLED',
    payload: data,
  };
};
export const setDefault = () => {
  return {
    type: 'RESET_PASSWORD_DEFAULT'
  };
};
export const resetRequest = () => {
  return {
    type: 'RESET_PASSWORD_REQUEST',
  };
};

export const resetSuccess = (message) => {
  return {
    type: 'RESET_PASSWORD_SUCCESS',
    payload: message,
  };
};

export const resetFailed = (message) => {
  return {
    type: 'RESET_PASSWORD_FAILED',
    payload: error,
  };
};

// export const checkEmail = email => async dispatch => {
//     const res = await Axios.post(`${APIuri}/auth/check`, { email })

//     dispatch({ type: EMAIL_CHECK, payload: res.data.data.message})
// }

export const reset = (data) => async (dispatch) => {
  dispatch(resetRequest());
  try {
    const res = await Axios.patch(`${APIuri}/auth/reset_password`, data);
    dispatch(resetSuccess(res.data.message));
  } catch (error) {
    dispatch(resetSuccess(error.message));
  }
};
