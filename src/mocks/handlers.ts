import { rest } from 'msw';
// 관심사 분리, model은 별도로 구분합시당.
import products from 'src/mocks/data/products.json';
import coupons from 'src/mocks/data/coupons.json';

import { API_BASE_URL } from 'src/constants/urls';

export const handlers = [
  // 아이템 목록 가져오기
  rest.get(`${API_BASE_URL}/products?page=page&size=size`, (req, res, ctx) => {
    const params = req.url.searchParams;
    const page = Number(params.get('page'));
    const size = Number(params.get('size'));
    const totalCount = products.length;
    const totalPages = Math.ceil(totalCount / size);
    return res(
      ctx.status(200),
      ctx.json({
        contents: products.slice((page - 1) * size, page * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 1,
      }),
    );
  }),
  rest.get(`${API_BASE_URL}/coupons`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ coupons })),
  ),
];
