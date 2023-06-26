'use client';
import styled from 'styled-components';
import ShoppingIcon from '../icons/shopping-icon';

const CartButtonContainer = styled.a`
  padding: 4px;
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
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
  return (
    <CartButtonContainer href="/cart">
      <ShoppingIcon />
      {/* <Count>{totalItems}</Count> */}
    </CartButtonContainer>
  );
}
