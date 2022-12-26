import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 250px;
  margin: 10px 10px;
  border-radius: 8px;
  transition: all 250ms ease-in-out;
`;

export const QuantitySelectorWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  text-align: center;
  cursor: pointer;
`;

export const ProductDesctiptionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const Box = styled.div`
  width: 180px;
  padding: 4px 2px;
`;

export const ItemName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
