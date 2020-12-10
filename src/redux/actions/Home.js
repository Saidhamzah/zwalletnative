import Axios from 'axios'
import {APIuri} from '../../utils'

export const getHomeDefault = ()=> {
    return{
        type: 'GET_HOME_DEFAULT'
    }
}
const getHomeRequest = ()=> {
    return{
        type: 'GET_HOME_REQUEST'
    }
}

const getHomeSuccess = (data)=> {
    return{
        type: 'GET_HOME_SUCCESS',
        payload: data
    }
}
const getHomeError = (error)=> {
    return{
        type: 'GET_HOME_ERROR',
        message: error
    }
}

export const getHome = (fields,data) => {
    // console.log(fields.name,"cek cek")
    return (dispatch) => {
      dispatch(getHomeRequest());
          return Axios({
            method: "GET",
            url: `${APIuri}/user/home`,data,
            headers: fields,
          })
          .then((res) => {
            const data = res.data;
            console.log(data, "cek")
            dispatch(getHomeSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(getHomeError(message));
          });

    
    };
  };
