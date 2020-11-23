import {APIuri} from '../../utils'
import Axios from 'axios'

const UsersRequest = ()=> {
    return{
        type: 'USERS_REQUEST'
    }
}

const UsersSuccess = (data)=> {
    return{
        type: 'USERS_SUCCESS',
        payload: data
    }
}
const UsersError = (error)=> {
    return{
        type: 'USERS_ERROR',
        payload: error
    }
}

//search
const getUsersRequest = ()=> {
  return{
      type: 'GET_USERS_REQUEST'
  }
}

const getUsersSuccess = (data)=> {
  return{
      type: 'GET_USERS_SUCCESS',
      payload: data
  }
}
const getUsersError = (error)=> {
  return{
      type: 'GET_USERS_ERROR',
      payload: error
  }
}

export const Users = (fields) => {
    console.log(fields,"ceek")
    return (dispatch) => {
      dispatch(UsersRequest());
      return Axios({
        method: "GET",
        url: `${APIuri}/user/`,
        headers: fields,
      })
        .then((res) => {
          const data = res.data;
          console.log(data.data,"aaaaaaaaaa")
          dispatch(UsersSuccess(data));
        })
        .catch((err) => {
          const message = err.message;
          dispatch(UsersError(message));
        });
    };
  };

  export const SearchUsers = (fields) => {
    console.log(fields, "coba baca")
    return (dispatch) => {
      dispatch(getUsersRequest());
      return Axios({
        method: "GET",
        headers: fields,
        url: `${APIuri}/user?search='${fields.name}'`,
      })
        .then((res) => {
          const data = res.data;
          console.log(data,"cek cek")
          dispatch(getUsersSuccess(data));
        })
        .catch((err) => {
          const message = err.message;
          dispatch(getUsersError(message));
        });
    };
  };
