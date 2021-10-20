import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
  let postsElements = props.posts.map(el => (
    <Post key={el.id} message={el.message} likesCount={el.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ''
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <textarea
          ref={newPostElement}
          placeholder='Vvedite text'
          cols='100'
          rows='5'
        ></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
