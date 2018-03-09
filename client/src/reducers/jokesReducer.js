import { FETCH_JOKES } from '../actions/types';

export default (state = {}, action) => {
  console.log('heelllooo jokes', action);
  switch (action.type) {
    case FETCH_JOKES:
      return action || 'hello';
    default:
      return state;
  }
};
