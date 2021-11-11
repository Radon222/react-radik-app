import profileReducer, { addPostAC, deletePost } from './profileReducer';

let state = {
  posts: [
    { id: 1, message: 'Post message one', likesCount: 12 },
    { id: 2, message: 'Post message two', likesCount: 10 },
  ],
};

test('length of posts should be incremented', () => {
  let action = addPostAC('radon4ik');  
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test('message of new post should be correct', () => {
  let action = addPostAC('radon4ik');
  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('radon4ik');
});

test('after deleting of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

test('incorect id', () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
