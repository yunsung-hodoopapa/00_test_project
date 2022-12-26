import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-left: 0;
`;

export const ListWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 20px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
