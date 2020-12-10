import Axios from 'axios';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {APIuri} from '../../utils';

export const changeRequest = () => {
  return {
    type: 'CHANGE_PASSWORD_REQUEST',
  };
};

export const changeSuccess = (message) => {
  return {
    type: 'CHANGE_PASSWORD_SUCCESS',
    payload: message,
  };
};

export const changeFailed = (message) => {
  return {
    type: 'CHANGE_PASSWORD_FAILED',
    payload: error,
  };
};

export const changePass = (data, token) => {
  return (dispatch) => {
    dispatch(changeRequest());
    console.log(data,' ini change pass');
    return Axios({
      method: 'PATCH',
      url: `${APIuri}/user/change_password`,data,
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
