import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import style from '../../../styles/Pagination.module.css';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={`${style.paginationContainer} ${style.paginationBar}`}
    >
      <li
        className={classnames(`${style.paginationItem}`, {
            [style.disabled]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={`${style.arrow} ${style.left}`} />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={classnames(`${style.paginationItem}`, {
                [style.selected]: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(`${style.paginationItem}`, {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={`${style.arrow} ${style.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
