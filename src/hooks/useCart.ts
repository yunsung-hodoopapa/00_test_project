import { useEffect, useState } from 'react';
import { useCartStore } from 'src/store/useCartStore';
import { ProductInfoType } from 'src/type/index';

const useCart = () => {
  const [userCart, setUserCart] = useState<ProductInfoType[]>([]);
  const { cart } = useCartStore();

  // TODO: useCart를 사용할때마다 다음 렌더에서 useEffect를 이용해 로컬스토리지에서 데이터를 불러오는데, 처음부터 같은 값을 참조하는게 아니라서 데이터에 정합성에 문제가 생길 수 있음.
  // 싱글톤 형태로 구성해보면 좋았을 것 같음. next.js에서 싱글톤 형태로 persist 구현할 수 있도록 찾아보기
  //https://blog.devgenius.io/managing-persistent-states-in-nextjs-with-zustand-e6feea1a2d36
  // https://github.com/pmndrs/zustand/issues/1145#issuecomment-1209244183
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
