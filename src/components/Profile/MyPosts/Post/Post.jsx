import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUKEraYAfiOcE-8PkTigl2bIPqWl4nM-Ag&usqp=CAU' />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
