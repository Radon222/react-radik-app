import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img className={classes.contentimg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCPDuNaukD8ipmkQrrl0b0Lk-I2k-_Ogfmg&usqp=CAU' />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;