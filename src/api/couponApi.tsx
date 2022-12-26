import { api } from './api';
import { API_BASE_URL } from 'src/constants/urls';

class CouponApi {
  async getCoupons() {
    const res = await api.callApi({
      url: `${API_BASE_URL}/api/coupons`,
      method: 'GET',
    });
    return res.data;
  }
}

export const couponApi = new CouponApi();
