import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {store => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostAC());
        };

        let onPostChange = text => {
          store.dispatch(updateNewPostTextAC(text));
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
