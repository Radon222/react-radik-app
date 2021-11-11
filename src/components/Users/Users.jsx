import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

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
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
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
