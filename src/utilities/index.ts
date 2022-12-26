export const convertQueryStringToIntegerNumber = (
  queryString: string | string[] | undefined,
): number | null => {
  if (!queryString) return null;
  // 동적 라우팅을 구현하기 위해 쿼리스트링을 숫자로 형변환해야한다.
  const number =
    typeof queryString === 'string'
      ? Number(queryString)
      : Number(queryString[0]);

  if (!isNaN(number) || number <= 0) return null;

  return number;
};
