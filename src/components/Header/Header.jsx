import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = props => {
  return (
    <header className={classes.header}>
      <img
        alt='header'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEA9kk11Kv2RUzcmUxlTzHIVY7S5mdA0PFA&usqp=CAU'
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>{props.login}-<button onClick={props.logout}>Logout</button></div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
