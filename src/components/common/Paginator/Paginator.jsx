import React from 'react';
import classes from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.top}>
      {pages.map(page => {
        return (
          <span
            key={page}
            className={
              currentPage === page
                ? classes.selectedPage
                : classes.noSelected
            }
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {`<${page}>`}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
