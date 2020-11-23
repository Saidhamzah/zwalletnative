import Axios from 'axios';
import {APIuri} from '../../utils'
const getSearchRequest = () => {
  return {
    type: 'GET_SEARCH_REQUEST',
  };
};

const getSearchSuccess = (data) => {
  return {
    type: 'GET_SEARCH_SUCCESS',
    payload: data,
  };
};
const getSearchError = (error) => {
  return {
    type: 'GET_SEARCH_ERROR',
    payload: error,
  };
};
const getSearchRequestTransfer = () => {
  return {
    type: 'GET_SEARCHTRANSFER_REQUEST',
  };
};

const getSearchSuccessTransfer = (data) => {
  return {
    type: 'GET_SEARCHTRANSFER_SUCCESS',
    payload: data,
  };
};
const getSearchErrorTransfer = (error) => {
  return {
    type: 'GET_SEARCHTRANSFER_ERROR',
    payload: error,
  };
};

export const getSearch = (token, paramSearch) => {
  return (dispatch) => {
    dispatch(getSearchRequest());
    return Axios({
      method: 'GET',
      url: `${APIuri}/user/all`,
      headers: token,
      params: {search: paramSearch},
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'cek');
        dispatch(getSearchSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(getSearchError(message));
      });
  };
};
export const getSearchTransfer = (token, id) => {
  return (dispatch) => {
    dispatch(getSearchRequestTransfer());
    return Axios({
      method: 'GET',
      url: `${APIuri}/user/getuser`,
      headers: token,
      params: {id: id},
    })
      .then((res) => {
        const data = res.data;
        console.log(data, 'cek');
        dispatch(getSearchSuccessTransfer(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(getSearchErrorTransfer(message));
      });
  };
};
