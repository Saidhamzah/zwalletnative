import Axios from 'axios'

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
        payload: error
    }
}

export const getHome = (fields) => {
    // console.log(fields.name,"cek cek")
    return (dispatch) => {
      dispatch(getHomeRequest());
          return Axios({
            method: "GET",
            url: `https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/user/home`,
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
