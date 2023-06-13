'use client';
import BackButton from '@/components/BackButton';
import CartProduct from '@/components/CartProduct';
import ResumeCart from '@/components/ResumeCart';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

const CartInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  span {
    line-weight: 300;
    color: var(--text-dark);
  }
`;

const Total = styled.span`
  font-weight: 600;
  color: var(--text-tooltip);
`;

const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CartSection = styled.span`
  font-size: 1.5rem;
  color: var(--text-dark);
  font-weight: 600;
  margin-bottom: 6px;
`;

export default function Cart() {
  return (
    <Container>
      <CartProducts>
        <BackButton />
        <CartInfo>
          <CartSection>SEU CARRINHO</CartSection>
          <span>Total (3 produtos) <Total>R$161,00</Total></span>
        </CartInfo>
        <ProductList>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </ProductList>
      </CartProducts>
      <ResumeCart />
    </Container>
  );
}
