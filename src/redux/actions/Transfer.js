import Axios from 'axios';
import {APIuri} from '../../utils';
import qs from 'qs'
export const transferDataFilled = (data) => {
  return {
    type: 'FORM_TRF_FILLED',
    payload: data,
  };
};

const TransferRequest = () => {
  return {
    type: 'TRANSFER_REQUEST',
  };
};

const TransferSuccess = (data) => {
  return {
    type: 'TRANSFER_SUCCESS',
    payload: data,
  };
};
const TransferFailed = (error) => {
  return {
    type: 'TRANSFER_FAILED',
    payload: error,
  };
};
export const wrongPin = (message) => {
  return {
    type: WRONG_PIN,
    payload: message,
  };
};

export const transfer = (token, transferData) => {
  return (dispatch) => {
    dispatch(TransferRequest());
    let data = qs.stringify(transferData)
    return Axios({
      method: 'POST',
      url: `${APIuri}/transaction/`,data,
      headers: token,
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'cek');
        dispatch(TransferSuccess(data.message));
      })
      .catch((err) => {
        if (err.response.data.message == 'Wrong Pin') {
          dispatch(wrongPin(err.response.data.message));
        } else {
          dispatch(TransferFailed(err.response.data.message));
        }
      });
  };
};
