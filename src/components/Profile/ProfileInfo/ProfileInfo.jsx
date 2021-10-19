import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.img}
          alt='234'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCPDuNaukD8ipmkQrrl0b0Lk-I2k-_Ogfmg&usqp=CAU'
        />
      </div>
      <div className={classes.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
