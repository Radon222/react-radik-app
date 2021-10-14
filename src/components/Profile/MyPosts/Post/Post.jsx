import React from 'react';
import classes from './Post.module.css';

const Post = props => {
  return (
    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUKEraYAfiOcE-8PkTigl2bIPqWl4nM-Ag&usqp=CAU' />
      {props.message}
      <div>
        <span>likes: {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
