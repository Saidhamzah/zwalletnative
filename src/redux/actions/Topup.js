import Axios from 'axios'
import {APIuri} from '../../utils'
const TopupRequest = ()=> {
    return{
        type: 'GET_TOPUP_REQUEST'
    }
}

const TopupSuccess = (data)=> {
    return{
        type: 'GET_TOPUP_SUCCESS',
        payload: data
    }
}
const TopupError = (error)=> {
    return{
        type: 'GET_TOPUP_ERROR',
        payload: error
    }
}

export const getTopup = () => {
    // console.log(fields.name,"cek cek")
    return (dispatch) => {
      dispatch(TopupRequest());
          return Axios({
            method: "GET",
            url: `${APIuri}/topup/`,
          })
          .then((res) => {
            const data = res.data;
            console.log(data, "cek topup")
            dispatch(TopupSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(TopupError(message));
          });
    };
  };
