import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useCartStore } from 'src/store/useCartStore';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: black;
  color: white;
`;

const IconWrapper = styled.div`
  display: flex;
  text-align: center;
  cursor: pointer;
  gap: 1.5rem;
`;

const CartQuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: tomato;
  font-size: 1.5rem;
  text-align: center;
`;

const Header = () => {
  const router = useRouter();
  const { cart } = useCartStore();
  return (
    <StyledHeader>
      <div
        onClick={() => {
          return router.push('/products');
        }}
      >
        <h1>호두파파 스토어</h1>
      </div>
      <IconWrapper
        onClick={() => {
          return router.push('/cart');
        }}
      >
        <CartQuantityWrap>{cart.length}</CartQuantityWrap>
        <Image
          height={25}
          width={25}
          color="white"
          src="/assets/ico_cart.svg"
          alt="장바구니"
        />
      </IconWrapper>
    </StyledHeader>
  );
};

export default Header;
