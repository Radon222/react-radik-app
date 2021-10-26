import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import jobTrue from '../../../assets/imeges/jobTrue.png';
import jobFalse from '../../../assets/imeges/jobFalse.png';
import userPhoto from '../../../assets/imeges/userPhoto.png';


const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={classes.img}
          alt='234'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCPDuNaukD8ipmkQrrl0b0Lk-I2k-_Ogfmg&usqp=CAU'
        />
      </div>
      <div className={classes.descriptionBlock}>
        <div>
          <div>Status: {props.profile.aboutMe ? props.profile.aboutMe : 'status no'}</div>
          <img className={classes.userPhoto} alt='123' src={props.profile.photos.large ? props.profile.photos.large : userPhoto} />
        </div>
        <div>
          <h3>My contacts:</h3>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div className={classes.job}>
            <img
              alt='123'
              src={props.profile.lookingForAJob ? jobTrue : jobFalse}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
