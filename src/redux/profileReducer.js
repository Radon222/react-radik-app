const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Post message one', likesCount: 12 },
    { id: 2, message: 'Post message two', likesCount: 10 },
  ],
  newPostText: 'radon4ik',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 10,
        message: state.newPostText,
        likesCount: 5,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload,
      };
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
