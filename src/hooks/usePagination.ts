import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { convertQueryStringToIntegerNumber } from 'src/utilities';

const Page_COUNT_SIZE = 5;

export const usePagenation = (totalCount: number = 1) => {
  const router = useRouter();

  return useMemo(() => {
    const page = convertQueryStringToIntegerNumber(router.query.page) || 1;
    const size = convertQueryStringToIntegerNumber(router.query.size) || 5;

    const lastPage = Math.ceil(totalCount / Number(size));

    //  쿼리스트링의 페이지 숫자에서 5를 나눈 몫이 있을 경우 쿼리스트링을 기반으로 끝자리 페이지의 숫자를 구한다
    let endPage =
      page % Page_COUNT_SIZE
        ? page + (Page_COUNT_SIZE - (page % Page_COUNT_SIZE))
        : page;

    let startPage = endPage - (Page_COUNT_SIZE - 1);

    if (endPage > lastPage) {
      endPage = lastPage;
    }

    return {
      currentPage: page,
      currentSize: size,
      pages: Array.from(Array(endPage + 1 - startPage).keys()).map(
        (i) => startPage + i,
      ),
      disabledPrev: startPage === 1,
      disabledNext: endPage === lastPage,
      onClickPrev: () => {
        router.push({
          pathname: '/products',
          query: {
            page: endPage - Page_COUNT_SIZE,
            size,
          },
        });
      },
      onClickNext: () => {
        router.push({
          pathname: '/products',
          query: {
            page: startPage + Page_COUNT_SIZE,
            size,
          },
        });
      },
    };
  }, [router, totalCount]);
};
