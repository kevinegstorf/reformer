import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jokesReducer from './jokesReducer';

export default combineReducers({
  auth: authReducer,
  joke: jokesReducer
});
