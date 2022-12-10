import { api, HOME_URL } from './api';

class ProductApi {
  async getProducts() {
    const res = await api.callApi({
      url: `${HOME_URL}/api/products`,
      method: 'GET',
    });
    return res;
  }
}

export const productApi = new ProductApi();
