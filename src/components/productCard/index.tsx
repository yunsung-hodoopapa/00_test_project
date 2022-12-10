import { Card, Box } from '@mui/material';
import styled from '@emotion/styled';

type ProductInfoType = {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
};

const StyledCard = styled(Card)`
  display: 'flex';
  flex-direction: 'column';
  justify-content: 'start';
  margin: 'auto';
  overflow: 'hidden';
  transition: 'all 250ms ease-in-out';
  border-radius: '8px';
`;

const ProductCard = (props: ProductInfoType) => {
  // eslint-disable-next-line no-unused-vars
  const { item_no, item_name, detail_image_url, price, score } = props;

  return (
    <StyledCard>
      <Box>{item_name}</Box>
    </StyledCard>
  );
};

export default ProductCard;
