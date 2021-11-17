import preloader from '../../../assets/imeges/preloader.svg';
import React from 'react';
import classes from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img alt='123' src={preloader} />
    </div>
  );
};

export default Preloader;
