import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    { id: 1, message: 'Redaddsffj', likesCount:12 },
    { id: 2, message: 'asdfgreff@@@', likesCount:10 },
    { id: 3, message: 'ASDASDASD', likesCount:0 },
    { id: 4, message: 'A#34t564', likesCount:9 },
    { id: 5, message: 'qweqwe', likesCount:1 },
    { id: 6, message: '234qwe235', likesCount:123 }
  ];

  let postsElements = postsData.map ( el => <Post key={el.id} message={el.message} likesCount={el.likesCount} />)


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
      <div className={classes.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
