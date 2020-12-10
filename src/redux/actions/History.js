import Axios from 'axios'
import {APIuri} from '../../utils'
const HistoryRequest = ()=> {
    return{
        type: 'GET_HISTORY_REQUEST'
    }
}

const HistorySuccess = (data)=> {
    return{
        type: 'GET_HISTORY_SUCCESS',
        payload: data
    }
}
const HistoryError = (error)=> {
    return{
        type: 'GET_HISTORY_ERROR',
        payload: error
    }
}

export const getHistory = (fields) => {
    console.log(fields,"cek cek")
    return (dispatch) => {
      dispatch(HistoryRequest());
          return Axios({
            method: "GET",
            url: `${APIuri}/transaction/history`,
            headers: fields
          })
          .then((res) => {
            const data = res.data;
            console.log(data, "cek")
            dispatch(HistorySuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(HistoryError(message));
          });

    
    };
  };
