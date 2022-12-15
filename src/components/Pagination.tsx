import React, { Dispatch, SetStateAction } from 'react';
import Button from './common/Button';
import styled from '@emotion/styled';

type PaginationPropType = {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  hasMore: boolean | undefined;
  totalPages: number | undefined;
};

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Pagination = (props: PaginationPropType) => {
  const { currentPage, setCurrentPage, hasMore, totalPages } = props;

  return (
    <PaginationWrap>
      <Button
        isBorder={true}
        themeId={'grey'}
        marginRight={'0px'}
        size={'MEDIUM'}
        disabled={currentPage === 1}
        onClick={(e) => {
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
            themeId={'grey'}
            marginRight={'0px'}
            size={'MEDIUM'}
            key={i}
            onClick={() => {
              return setCurrentPage(i + 1);
            }}
            isActive={Boolean(currentPage === i + 1)}
          >
            {i + 1}
          </Button>
        );
      })}
      <Button
        isBorder={true}
        themeId={'grey'}
        marginRight={'0px'}
        size={'MEDIUM'}
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
