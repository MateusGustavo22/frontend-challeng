'use client';
import styled from 'styled-components';
import AddProduct from './AddProduct';

const Container = styled.div`
  max-width: 736px;
  min-height: 211px;
  background-color: white;
  position: relative;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;
const ProductImage = styled.div`
  width: 256px;
  height: 211px;
  background-color: gray;
  flex-shrink: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Product = styled.div`
  padding: 16px 32px 16px 32px;
  display: flex;
  flex-direction: column;
`;

const ItemsSelected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const Name = styled.span`
  font-size: 1.25rem;
  color: var(--text-dark);
`;

const Description = styled.p`
  font-size: 0.8125rem;
  color: var(--text-dark);
`;

const Price = styled.span`
  font-size: 1rem;
  color: var(--text-tooltip);
  font-weight: 600;
`;

export default function CartProduct() {
  return (
    <Container>
      <ProductImage></ProductImage>
      <Product>
        <Info>
          <Name>Caneca de cerâmica rústica</Name>
          <Description>
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum
            texto que venha a ser inserido nesse campo, descrevendo tal produto.
          </Description>
        </Info>
        <ItemsSelected>
          <AddProduct />
          <Price>R$ 40,00</Price>
        </ItemsSelected>
      </Product>
    </Container>
  );
}
