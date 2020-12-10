import {combineReducers} from 'redux';
import Auth from './Auth';
import {getHome} from './Home';
import User from './Users';
import {Topup} from './Topup';
import {getSearch, getSearchTransfer} from './Search';
import {Transfer} from './Transfer';
import {getHistory} from './History';
import ProfileNumber from './Profile';
import Register from './Register';
import ResetPass from './ResetPass';
import ChangePassword from './ChangePassword';
import ChangePin from './ChangePin';
import {getDevice} from './Device';

const reducers = combineReducers({
  Auth,
  getHome,
  User,
  Topup,
  getSearch,
  getSearchTransfer,
  Transfer,
  getHistory,
  ProfileNumber,
  Register,
  ResetPass,
  ChangePassword,
  ChangePin,
  getDevice,
});

export default reducers;
