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



export const AuthRegister = (fields) => {
    return (dispatch) =>{
        dispatch(AuthRegisterRequest())
        return Axios({
            method: 'POST',
            data: fields,
            url: 'https://zwallet-sleepless-backend.herokuapp.com/zwallet/api/v1/auth/register            '
        }).then((res)=> {
            const data = res.data
            console.log(data, 'dataas')
            ToastAndroid.show(
                `Success register account, Please Login`,
                ToastAndroid.SHORT,
            );
            dispatch(AuthRegisterSuccess(data))
        }).catch((err)=> {
            const message = err.message
            dispatch(AuthRegisterError(message))
        })
    }
}


export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
