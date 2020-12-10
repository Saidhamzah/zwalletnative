import Axios from 'axios';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {APIuri} from '../../utils';

export const pinFilled = (data) => {
    return {
      type: 'PIN_FILLED',
      payload: data,
    };
  };
export const changeRequest = () => {
  return {
    type: 'CHANGE_PIN_REQUEST',
  };
};

export const changeSuccess = (message) => {
  return {
    type: 'CHANGE_PIN_SUCCESS',
    payload: message,
  };
};

export const changeFailed = (message) => {
  return {
    type: 'CHANGE_PIN_FAILED',
    payload: error,
  };
};

export const changePinProfile = (data, token) => {
  return (dispatch) => {
    dispatch(changeRequest());
    console.log(data,' ini change pin');
    return Axios({
      method: 'PATCH',
      url: `${APIuri}/user/change_pin`,data,
      headers: token,
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'cek');
        dispatch(changeSuccess(res.data.message));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(changeFailed(err.message));
      });
  };
};
