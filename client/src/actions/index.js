import axios from 'axios';
import { FETCH_USER, SET_JOKES, FAVORITE_JOKES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export function setJokes(items) {
  return {
    type: SET_JOKES,
    items
  };
}

export function favoriteJoke(joke) {
  return {
    type: FAVORITE_JOKES,
    joke
  };
}
