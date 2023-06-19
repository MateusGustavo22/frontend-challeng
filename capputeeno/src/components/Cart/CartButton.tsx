'use client';
import styled from 'styled-components';
import ShoppingIcon from '../icons/shopping-icon';
import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

const CartButtonContainer = styled.a`
  padding: 4px;
  display: flex;
  position: relative;
  cursor: pointer;
`;

const Count = styled.span`
  font-size: 0.625rem;
  line-height: none;
  width: 17px;
  height: 17px;
  background-color: #de3838;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  bottom: -4px;
  right: -2px;
`;

export default function CartButton() {
  const { totalItems } = useContext(CartContext);
  
  return (
    <CartButtonContainer href="/cart">
      <ShoppingIcon />
      <Count>{totalItems}</Count>
    </CartButtonContainer>
  );
}
