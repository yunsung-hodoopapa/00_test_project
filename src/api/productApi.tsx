import { api } from './api';
import { API_BASE_URL } from 'src/constants/urls';

class ProductApi {
  async getProducts(page: number) {
    const size = 5;
    const res = await api.callApi({
      url: `${API_BASE_URL}/api/products?page=${page}&size=${size}`,
      method: 'GET',
    });
    return res.data;
  }
}

export const productApi = new ProductApi();
