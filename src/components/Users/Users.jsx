import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import classes from './Users.module.css';

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          portionSize={10}
        />
      {users.map(user => (
        <User
          user={user}
          disabledProgress={props.disabledProgress}
          unFollow={props.unFollow}
          follow={props.follow}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
