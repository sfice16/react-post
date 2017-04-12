import * as types from '../actions/ActionTypes';

const initialState = {
  id: 0,
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case types.ADDPOST:
      return {
        id: action.id,
        title: action.title,
        category: action.category,
        content: action.content,
      };
    case types.DELETEPOST:
      return {
        id: null,
        title: null,
        category: null,
        content: null,
      };
    default:
      return state;
  }
}
