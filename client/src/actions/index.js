import axios from 'axios';
import { FETCH_USER, FETCH_JOKES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchJokes = () => async dispatch => {
  const res = await axios.get('http://api.icndb.com/jokes/random/10');
  dispatch({ type: FETCH_JOKES, jokes: res.data.value });
};
