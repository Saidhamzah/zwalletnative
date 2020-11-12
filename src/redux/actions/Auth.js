import Axios from 'axios'
import { ToastAndroid } from 'react-native'

const AuthLoginRequest = ()=> {
    return{
        type: 'LOGIN_REQUEST'
    }
}

const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const AuthLoginError = (error)=> {
    return{
        type: 'LOGIN_ERROR',
        payload: error
    }
}
const AuthRegisterRequest = ()=> {
    return{
        type: 'Register_REQUEST'
    }
}

const AuthRegisterSuccess = (data)=> {
    return{
        type: 'Register_SUCCESS',
        payload: data
    }
}
const AuthRegisterError = (error)=> {
    return{
        type: 'Register_ERROR',
        payload: error
    }
}



export const AuthLogin = (fields) => {
    return (dispatch) =>{
        dispatch(AuthLoginRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: 'https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/auth/login            '
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show(
                `Success Login, Welcome`,
                ToastAndroid.SHORT,
            );
            dispatch(AuthLoginSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthLoginError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
