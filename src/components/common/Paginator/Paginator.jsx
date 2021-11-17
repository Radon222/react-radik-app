import React, { useState } from 'react';
import classes from './Paginator.module.css';

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={classes.top}>
      <button
        onClick={() => {
          setPortionNumber(portionNumber - 1);
        }}
        disabled={(portionNumber === 1)}
      >
        PREV
      </button>
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map(page => {
          return (
            <span
              key={page}
              className={
                currentPage === page ? classes.selectedPage : classes.noSelected
              }
              onClick={() => {
                onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      <button
        onClick={() => {
          setPortionNumber(portionNumber + 1);
        }}
        disabled={(portionNumber === portionCount)}
      >
        NEXT
      </button>
    </div>
  );
};

export default Paginator;
