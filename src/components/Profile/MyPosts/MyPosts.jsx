import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map(el => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea placeholder='Vvedite text' cols='100' rows='5'></textarea>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
