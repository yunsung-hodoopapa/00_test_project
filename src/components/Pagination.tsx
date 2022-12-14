import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';

type PaginationPropType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  hasMore: boolean | undefined;
  totalCount: number | undefined;
};

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 8px;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: blue;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const Pagination = (props: PaginationPropType) => {
  const { currentPage, setCurrentPage, hasMore, totalPages } = props;

  return (
    <PaginationWrap>
      <Button
        disabled={currentPage === 0}
        onClick={() => {
          return setCurrentPage((prev) => {
            return prev - 1;
          });
        }}
      >
        이전 페이지
      </Button>
      {new Array(totalPages).fill('').map((num, i) => {
        return (
          <Button
            key={i + 1}
            onClick={() => {
              return setCurrentPage(i);
            }}
            aria-current={currentPage === i ? 'page' : null}
          >
            {i + 1}
          </Button>
        );
      })}
      <Button
        disabled={!hasMore}
        onClick={() => {
          return setCurrentPage((prev) => {
            return prev + 1;
          });
        }}
      >
        다음페이지
      </Button>
    </PaginationWrap>
  );
};

export default Pagination;
