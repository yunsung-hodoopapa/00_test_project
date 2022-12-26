import { useRouter } from 'next/router';
import { useProductsQuery } from './queries/useProductsQuery';
import { convertQueryStringToIntegerNumber } from 'src/utilities';

export const useProductsQueryWithRouter = () => {
  // isReady에 대해서 더 알아보기
  // https://im-designloper.tistory.com/98
  const { query, isReady } = useRouter();

  // 최초로 받아올 데이터는 페이지 넘버가 1이기 때문에 1을 제공하고 이후는 동적 라우팅으로 받아오는 쿼리스트링을 분석해서 페이지 넘버를 정의한다.
  const page = convertQueryStringToIntegerNumber(query.page) || 1;
  const size = convertQueryStringToIntegerNumber(query.size) || 5;

  return useProductsQuery({
    size,
    page,
    options: {
      // 동적으로 쿼리스트링을 불러왔을때만 useQuery가 실행되도록 options를 세팅한다.
      enabled: isReady,
    },
  });
};
