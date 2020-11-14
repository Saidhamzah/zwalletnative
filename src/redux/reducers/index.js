import { combineReducers } from 'redux'
import Auth from './Auth'
import {getHome} from './Home'
import User from './Users'
import {Topup} from './Topup'


const reducers = combineReducers({
    Auth,
    getHome,
    User,
    Topup
})

export default reducers