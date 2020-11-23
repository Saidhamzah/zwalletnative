import { combineReducers } from 'redux'
import Auth from './Auth'
import {getHome} from './Home'
import User from './Users'
import {Topup} from './Topup'
import {getSearch, getSearchTransfer} from './Search'
import {Transfer} from './Transfer'


const reducers = combineReducers({
    Auth,
    getHome,
    User,
    Topup,
    getSearch,
    getSearchTransfer,
    Transfer
})

export default reducers