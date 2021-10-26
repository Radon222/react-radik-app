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
          <h2>{props.profile.fullName}</h2>
          <h4>About me: {props.profile.aboutMe}</h4>
          <div>
            Status:{' '}
            {props.profile.aboutMe ? props.profile.aboutMe : 'status no'}
          </div>
          <img
            className={classes.userPhoto}
            alt='123'
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : userPhoto
            }
          />
        </div>
        <div>
          <h3>
            {(props.profile.contacts.facebook ||
            props.profile.contacts.vk ||
            props.profile.contacts.twitter ||
            props.profile.contacts.instagram ||
            props.profile.contacts.youtube ||
            props.profile.contacts.github)
              ? 'My contacts:'
              : 'No contacts'}
          </h3>
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
          <div>
            {props.profile.lookingForAJobDescription
              ? props.profile.lookingForAJobDescription
              : 'Not to offer a job'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
