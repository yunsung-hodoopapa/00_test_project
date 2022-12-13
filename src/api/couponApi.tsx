import { api, HOME_URL } from './api';

class CouponApi {
  async getCoupons() {
    const res = await api.callApi({
      url: `${HOME_URL}/api/coupons`,
      method: 'GET',
    });
    return res.data;
  }
}

export const couponApi = new CouponApi();
