import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
