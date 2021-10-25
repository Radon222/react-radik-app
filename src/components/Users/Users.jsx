import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/imeges/user.png';

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.top}>
        {pages.map(page => {
          return (
            <span
              key={page}
              className={
                props.currentPage === page
                  ? classes.selectedPage
                  : classes.noSelected
              }
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {`<${page}>`}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id} className={classes.user}>
          <div>
            <div>
              <img
                className={classes.photo}
                alt='123'
                src={user.photos.small != null ? user.photos.small : userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{'user.location.country'}</div>
            <div>{'user.location.city'}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
