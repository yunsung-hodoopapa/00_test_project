/* eslint-disable no-empty-pattern */
import Link from 'next/link';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import { useProductsQueryWithRouter } from 'src/hooks/useProductQueryWithRouter';
import { usePagenation } from 'src/hooks/usePagination';

import * as Styled from './Pagination.style';

type PaginationProps = {};

const Pagination = ({}: PaginationProps) => {
  const { data } = useProductsQueryWithRouter();
  const {
    currentPage,
    currentSize,
    pages,
    disabledNext,
    disabledPrev,
    onClickNext,
    onClickPrev,
  } = usePagenation(data?.totalCount);

  return (
    <Styled.Container>
      <Styled.Button disabled={disabledPrev} onClick={onClickPrev}>
        <VscChevronLeft />
      </Styled.Button>
      <Styled.PageWrapper>
        {pages.map((page) => (
          // 링크 컴포넌트를 활용하면 페이지네이션 다이나믹 라우팅이 한층 수월해질 수 있다.
          <Link
            key={page}
            href={{
              pathname: '/products',
              query: {
                page,
                size: currentSize,
              },
            }}
            passHref
          >
            <Styled.Page selected={page === currentPage}>{page}</Styled.Page>
          </Link>
        ))}
      </Styled.PageWrapper>
      <Styled.Button disabled={disabledNext} onClick={onClickNext}>
        <VscChevronRight />
      </Styled.Button>
    </Styled.Container>
  );
};

export default Pagination;
