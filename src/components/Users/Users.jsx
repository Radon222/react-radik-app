import React from 'react';
import classes from './Users.module.css';

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUKEraYAfiOcE-8PkTigl2bIPqWl4nM-Ag&usqp=CAU',
        followed: false,
        fullName: 'Raddon',
        status: 'Boss',
        location: { city: 'Russia', country: 'Kazan' },
      },
      {
        id: 2,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUKEraYAfiOcE-8PkTigl2bIPqWl4nM-Ag&usqp=CAU',
        followed: true,
        fullName: 'Alex',
        status: 'Boss',
        location: { city: 'Ukraine', country: 'Kiev' },
      },
      {
        id: 3,
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhUKEraYAfiOcE-8PkTigl2bIPqWl4nM-Ag&usqp=CAU',
        followed: true,
        fullName: 'Ruslan',
        status: 'Boss',
        location: { city: 'Belarus', country: 'Minsk' },
      },
    ]);
  }

  return (
    <div>
      {props.users.map(user => (
        <div key={user.id} className={classes.user}>
          <div>
            <div>
              <img className={classes.photo} alt='123' src={user.photoUrl} />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
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
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div>
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
