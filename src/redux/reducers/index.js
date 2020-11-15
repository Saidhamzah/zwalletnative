import { combineReducers } from 'redux'
import Auth from './Auth'
import {getHome} from './Home'
import User from './Users'
import {Topup} from './Topup'
import {getSearch} from './Search'


const reducers = combineReducers({
    Auth,
    getHome,
    User,
    Topup,
    getSearch
})

export default reducers