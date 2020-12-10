import Axios from 'axios';
import {APIuri} from '../../utils';

export const registerRequest = (data) => {
  return {
    type: 'REGISTER_REQUEST',
    payload: data,
  };
};

export const registerSuccess = (message) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: message,
  };
};

export const registerFailed = (data,message) => {
  return {
    type: 'REGISTER_FAILED',
    payload: data,
    message: message
  };
};
export const createPinRequest = () => {
  return {
    type: 'CREATE_PIN_REQUEST',
  };
};

export const createPinSuccess = (message) => {
  return {
    type: 'CREATE_PIN_SUCCESS',
    payload: message,
  };
};

export const createPinFailed = (message) => {
  return {
    type: 'CREATE_PIN_FAILED',
    payload: error,
  };
};

// export const checkEmail = email => async dispatch => {
//     const res = await Axios.post(`${APIuri}/auth/check`, { email })

//     dispatch({ type: EMAIL_CHECK, payload: res.data.data.message})
// }

export const createPin = (data) => async (dispatch) => {
  dispatch(createPinRequest());
  try {
    const res = await Axios.patch(`${APIuri}/auth/create_pin`, data);
    dispatch(createPinSuccess(res.data.message));
  } catch (error) {
    dispatch(createPinSuccess(error.message));
  }
};
export const registerEmail = (data) => async (dispatch) => {
  dispatch(registerRequest(data));
  try {
      console.log(data,'cek data')
    const res = await Axios.post(`${APIuri}/auth/register`, data);
    dispatch(registerSuccess(data,res.data.message));
  } catch (error) {
    dispatch(registerFailed(error.message));
  }
};
