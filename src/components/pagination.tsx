import React, { Dispatch, SetStateAction } from 'react';

type PaginationPropType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

const Pagination = (props: PaginationPropType) => {
  const { currentPage, setCurrentPage } = props;
  return (
    <div>
      <button
        onClick={() => {
          return setCurrentPage((prev) => {
            return prev - 1;
          });
        }}
      >
        이전 페이지
      </button>
      <span>page {currentPage + 1} </span>
      <button
        onClick={() => {
          return setCurrentPage((prev) => {
            return prev + 1;
          });
        }}
      >
        다음페이지
      </button>
    </div>
  );
};

export default Pagination;
