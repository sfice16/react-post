import * as types from './ActionTypes';

const nextPostId = 0;

export function addPost(title, category, content) {
  return {
    type: types.ADDPOST,
    id: nextPostId + 1,
    title,
    category,
    content,
  };
}

export function deletePost() {
  return {
    type: types.DELETEPOST,
    id: nextPostId + 1,
  };
}
