import Axios from 'axios'

const getSearchRequest = ()=> {
    return{
        type: 'GET_Search_REQUEST'
    }
}

const getSearchSuccess = (data)=> {
    return{
        type: 'GET_Search_SUCCESS',
        payload: data
    }
}
const getSearchError = (error)=> {
    return{
        type: 'GET_HOME_ERROR',
        payload: error
    }
}

export const getSearch = (token, paramSearch) => {
    // console.log(fields.name,"cek cek")
    return (dispatch) => {
      dispatch(getSearchRequest());
          return Axios({
            method: "GET",
            url: `https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/user/all`,
            headers: token,
            params: paramSearch
          })
          .then((res) => {
            const data = res.data;
            console.log(data, "cek")
            dispatch(getSearchSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            dispatch(getSearchError(message));
          });

    
    };
  };
