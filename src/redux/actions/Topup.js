import Axios from 'axios'

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
            url: `https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/topup/`,
          })
          .then((res) => {
            const data = res.data;
            console.log(data, "cek")
            dispatch(TopupSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(TopupError(message));
          });

    
    };
  };
