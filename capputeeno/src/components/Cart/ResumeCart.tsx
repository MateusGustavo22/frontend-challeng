'use client';
import { CartContext } from '@/context/CartContext';
import formatPrice from '@/utils/formatPrice';
import { useContext } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 352px;
  width: 100%;
  height: 700px;
  background-color: white;
  display: flex;
  position: absolute;
  right: 0;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 24px 16px 24px;

  @media screen and (max-width: 1160px) {
    max-width: 736px;
    position: relative;
    height: 100%;
    gap: 32px;
  }
`;

const TopSection = styled.div`
  width: 100%;

  .resume {
    margin-bottom: 24px;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-dark);
    display: block;
    margin-bottom: 30px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  gap: 12px;

  a {
    color: var(--text-apoio);
    text-decoration: underline;
    font-weight: 600;
  }
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-size: 1rem;
    color: var(--text-dark);
  }
`;

const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  span {
    font-size: 1rem;
    color: var(--text-dark);
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    color: var(--text-dark);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--shapes-light);
  margin-top: 24px;
  margin-bottom: 8px;
`;

const FinalizeButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #51b853;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  margin-top: 40px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #258427;
  }
`;

export default function ResumeCart() {
  const { totalPrice } = useContext(CartContext);
  const TotalPriceFormatted = formatPrice(totalPrice);
  const FRETE_IN_CENTS = 40 * 100;
  const totalPriceWithFreight = formatPrice(totalPrice + FRETE_IN_CENTS);

  return (
    <Container>
      <TopSection>
        <span className="resume">RESUMO DO PEDIDO</span>
        <SubTotal>
          <span>Subtotal de produtos</span>
          <span>{TotalPriceFormatted}</span>
        </SubTotal>
        <Delivery>
          <span>Entrega</span>
          <span>R$ 40,00</span>
        </Delivery>
        <Line />
        <Total>
          <span>Total</span>
          <span>{totalPriceWithFreight}</span>
        </Total>
        <FinalizeButton>FINALIZAR A COMPRA</FinalizeButton>
      </TopSection>
      <BottomSection>
        <a>AJUDA</a>
        <a>REEMBOLSOS</a>
        <a>ENTREGAS E FRETE</a>
        <a>TROCAS E DEVOLUÇÔES</a>
      </BottomSection>
    </Container>
  );
}
