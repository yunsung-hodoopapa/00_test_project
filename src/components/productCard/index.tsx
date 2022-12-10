import styled from '@emotion/styled';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: auto;
  transition: all 250ms ease-in-out;
  border: 1px solid blue;
  border-radius: 8px;
`;

const ProductCard = (props: any) => {
  // eslint-disable-next-line no-unused-vars
  const {
    item: { item_no, item_name, detail_image_url, price, score },
  } = props;

  return (
    <StyledCard>
      <span>{item_name}</span>
    </StyledCard>
  );
};

export default ProductCard;
