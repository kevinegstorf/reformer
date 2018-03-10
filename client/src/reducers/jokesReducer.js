import { SET_JOKES } from '../actions/types';

// export default (state = {}, action) => {
//   // console.log('heelllooo jokes', action);
//   switch (action.type) {
//     case FETCH_JOKES:
//       return action || 'hello';
//     default:
//       return state;
//   }
// };

export default (state = [], action) => {
  console.log('reducer', action);
  switch (action.type) {
    case SET_JOKES:
      return action.items;
    default:
      return state;
  }
};
