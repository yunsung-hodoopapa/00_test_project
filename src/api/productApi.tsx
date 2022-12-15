import { api, HOME_URL } from './api';

class ProductApi {
  async getProducts(page: number) {
    const size = 5;
    const res = await api.callApi({
      url: `${HOME_URL}/api/products?page=${page}&size=${size}`,
      method: 'GET',
    });
    return res.data;
  }
}

export const productApi = new ProductApi();
