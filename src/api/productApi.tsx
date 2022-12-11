import { api, HOME_URL } from './api';

class ProductApi {
  async getProducts(page: number) {
    const res = await api.callApi({
      url: `${HOME_URL}/api/products/${page}/${5}`,
      method: 'GET',
    });
    return res.data;
  }
}

export const productApi = new ProductApi();
