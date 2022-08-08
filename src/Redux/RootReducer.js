import {combineReducers} from 'redux';
import LoginReducer from './Reducer/AuthReducer/LoginReducer';

const Rootreducer = combineReducers({
  Login: LoginReducer,
});

export default Rootreducer;
