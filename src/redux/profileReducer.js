import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Post message one', likesCount: 12 },
    { id: 2, message: 'Post message two', likesCount: 10 },
  ],
  newPostText: 'radon4ik',
  profile: null,
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  payload: profile,
});
export const getUserProfile = userId => {
  return dispatch => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const updateNewPostTextAC = text => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
});

export default profileReducer;
