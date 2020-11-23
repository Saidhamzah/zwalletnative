import Axios from 'axios';
import {APIuri} from '../../utils'

export const transferDataFilled = (data) => {
  return {
    type: 'FORM_TRF_FILLED',
    payload: data
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
  
  export const transfer = (token, paramSearch) => {
    return (dispatch) => {
      dispatch(TransferRequest());
      return Axios({
        method: 'GET',
        url: `${APIuri}/user/all`,
        headers: token,
        params: {search: paramSearch},
      })
        .then((res) => {
          const data = res.data;
          console.log(data, 'cek');
          dispatch(TransferSuccess(data));
        })
        .catch((err) => {
          const message = err.message;
          dispatch(TransferFailed(message));
        });
    };
  };