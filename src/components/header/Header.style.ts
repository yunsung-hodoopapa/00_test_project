import styled from '@emotion/styled';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #667bda;
  color: white;
`;

export const Title = styled.a`
  font-size: 3rem;
  cursor: pointer;
`;

export const IconWrapper = styled.a`
  display: flex;
  text-align: center;
  cursor: pointer;
  gap: 1.5rem;
`;

export const CartQuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: #667bda;
  font-size: 1.5rem;
  text-align: center;
`;
