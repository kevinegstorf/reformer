import { combineReducers } from 'redux';
import authReducer from './authReducer';
import jokesReducer from './jokesReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  auth: authReducer,
  joke: jokesReducer
});
