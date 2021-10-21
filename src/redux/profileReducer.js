const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Redaddsffj', likesCount: 12 },
    { id: 2, message: 'ergergerg', likesCount: 10 },
  ],
  newPostText: 'radon4ik',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 10,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.payload;
      return state;
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });

export const updateNewPostTextAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});

export default profileReducer;
