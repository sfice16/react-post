import { combineReducers } from 'redux';
import posts from './posts';

export const reducer = combineReducers({
  posts,
});

export default reducer;
