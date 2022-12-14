import { useEffect, useState } from 'react';
import { ProductInfoType } from 'src/type/index';
import { useCartStore } from 'src/store/useCartStore';

const useCart = () => {
  const [userCart, setUserCart] = useState<ProductInfoType[]>([]);
  const { cart } = useCartStore();

  useEffect(() => {
    const loacalCartData = localStorage.getItem('user_CartStore');
    if (loacalCartData !== null) {
      const restoreCartData = JSON.parse(loacalCartData);
      if (restoreCartData.state.cart.length !== 0) {
        setUserCart(restoreCartData.state.cart);
      }
    }
  }, []);

  useEffect(() => {
    setUserCart(cart);
  }, [cart]);

  return { userCart };
};

export default useCart;
