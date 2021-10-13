import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCPDuNaukD8ipmkQrrl0b0Lk-I2k-_Ogfmg&usqp=CAU' />
      </div>
      <div>ava + description</div>
      <div>
        My Posts
        <div className={classes.posts}>New Post</div>
        <div>
          <div className={classes.item}>post1</div>
          <div className={classes.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
