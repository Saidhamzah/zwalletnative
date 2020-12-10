import Axios from 'axios';
import {APIuri} from '../../utils';
const DeviceRequest = () => {
  return {
    type: 'GET_DEVICE_REQUEST',
  };
};

const DeviceSuccess = (data) => {
  return {
    type: 'GET_DEVICE_SUCCESS',
    payload: data,
  };
};
export const getDevice = (fields) => {
  console.log(fields, 'cek cek');
  return (dispatch) => {
    dispatch(DeviceRequest());
    dispatch(DeviceSuccess(fields));

  };
};
