import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea placeholder='Vvedite text' cols='100' rows='5'></textarea>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message='Hi' likes='5' />
        <Post message='Yo' likes='15' />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
