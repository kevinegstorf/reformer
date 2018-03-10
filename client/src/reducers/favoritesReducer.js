import { FAVORITE_JOKES } from '../actions/types';
import { bake_cookie, read_cookie } from 'sfcookies';
//
// export default (state = [], action) => {
//   console.log('favorites reducer', action);
//   switch (action.type) {
//     case FAVORITE_JOKES:
//       state = [...state, action.joke];
//       return state;
//     default:
//       return state;
//   }
// };

export default (state = [], action) => {
  let favorites = [];
  state = read_cookie('favorites');
  switch (action.type) {
    case FAVORITE_JOKES:
      favorites = [...state, action.joke];
      bake_cookie('favorites', favorites);
      return state;
    default:
      return state;
  }
};
