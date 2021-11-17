import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/imeges/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, disabledProgress, unFollow, follow }) => {
  return (
    <div className={classes.user}>
      <div>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img
              className={classes.photo}
              alt='123'
              src={user.photos.small != null ? user.photos.small : userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={disabledProgress.some(id => id === user.id)}
              onClick={() => {
                unFollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={disabledProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>
        <div>{user.name}</div>
        <div>{user.id}</div>
      </div>
      <div>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
      </div>
    </div>
  );
};

export default User;
