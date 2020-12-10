import {APIuri} from '../../utils'
import Axios from 'axios'
import qs from 'qs'

const ProfileNumberRequest = ()=> {
    return{
        type: 'PROFILE_NUMBER_REQUEST'
    }
}

const ProfileNumberSuccess = (data)=> {
    return{
        type: 'PROFILE_NUMBER_SUCCESS',
        payload: data
    }
}
const ProfileNumberError = (error)=> {
    return{
        type: 'PROFILE_NUMBER_ERROR',
        payload: error
    }
}
const ProfileNumberAddRequest = ()=> {
    return{
        type: 'ADD_NUMBER_REQUEST'
    }
}

const ProfileNumberAddSuccess = (data)=> {
    return{
        type: 'ADD_NUMBER_SUCCESS',
        payload: data
    }
}
const ProfileNumberAddError = (error)=> {
    return{
        type: 'ADD_NUMBER_ERROR',
        payload: error
    }
}
const ProfileEditrequest = ()=> {
    return{
        type: 'EDIT_PROFILE_REQUEST'
    }
}

const ProfileEditSuccess = (data)=> {
    return{
        type: 'EDIT_PROFILE_SUCCESS',
        payload: data
    }
}
const ProfileEDITError = (error)=> {
    return{
        type: 'EDIT_PROFILE_ERROR',
        payload: error
    }
}
// export const profilEdit =(token,phone)=> async dispatch =>{
//     dispatch(ProfileNumberRequest())
//     try{
//         const res = await Axios.patch(`${APIuri}/user/updatePhone`,{
//             headers:token,
//             body: phone
//         })
//         dispatch(ProfileNumberSuccess(data));
//     } catch(error){
//         dispatch(ProfileNumberError)
//     }
// }

export const ProfileNumber = (token) => {
    return (dispatch) => {
        dispatch(ProfileNumberRequest());
        return Axios({
            method: "PATCH",
            url: `${APIuri}/user/deletePhone`,
            headers: token
        })
        .then((res) => {
            const data = res.data;
            dispatch(ProfileNumberSuccess(data));
        })
        .catch((err) => {
            const message = err.message;
          dispatch(ProfileNumberError(message));
        });
    };
  };
export const ProfileNumberAdd = (token,data) => {
    return (dispatch) => {
        dispatch(ProfileNumberAddRequest());
        // let phone = qs.stringify(phoneNumber)
        console.log(typeof(data.phoneNumber),'cek cek add')
        return Axios({
            method: "PATCH",
            url: `${APIuri}/user/updatePhone`,data,
            headers: token,
            
        })
        .then((res) => {
            const data = res.data;
            dispatch(ProfileNumberAddSuccess(data));
        })
        .catch((err) => {
            const message = err.message;
          dispatch(ProfileNumberAddError(message));
        });
    };
  };
export const editProfile = (token,data) => {
    return (dispatch) => {
        dispatch(ProfileEditrequest());
        console.log(token, data,'cek cek')
        return Axios({
            method: "PATCH",
            url: `${APIuri}/user/patch_user`,data,
            headers: token,
            'Content-Type': ' multipart/form-data',
            Accept: 'application/json'
        })
        .then((res) => {
            const data = res.data;
            dispatch(ProfileEditSuccess(data));
        })
        .catch((err) => {
            const message = err.message;
          dispatch(ProfileEDITError(message));
        });
    };
  };