import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';

const StyledHeader = styled.h1`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: blue;
  color: white;
`;

const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div>29cm 채용과제</div>
      <IconWrapper
        onClick={() => {
          return router.push('/cart');
        }}
      >
        <Image
          height={28}
          width={28}
          src="/assets/ico_cart.svg"
          alt="장바구니"
        />
      </IconWrapper>
    </StyledHeader>
  );
};

export default Header;
