'use client';
import BackButton from '@/components/BackButton';
import ResumeCart from '@/components/Cart/ResumeCart';
import { CartContext } from '@/context/CartContext';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import CartProduct from './CartProduct';
import Product from '../Product';
import formatPrice from '@/utils/format-price';
import ProductCartType from '@/types/products-cart';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  margin-top: 30px;
  justify-content: space-between;
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

export default function CartContent() {
  const [products, setProducts] = useState(localStorage.getItem('cartItems')) 

 
    const moreOneProduct = products?.length > 1 ? true : false;
  
  

  return (
    <Container>
      <CartProducts>
        <BackButton />
        <CartInfo>
          <CartSection>SEU CARRINHO</CartSection>
          <span>
            Total ({products.length} {moreOneProduct ? 'produtos' : 'produto'}) <Total>{TotalPriceFormatted}</Total>
          </span>
        </CartInfo>
        <ProductList>
          {products.map((item: ProductCartType) => (
            <CartProduct
              name={item.name}
              description={item.description}
              price_in_cents={item.price_in_cents}
              image_url={item.image_url}
            />
          ))}
        </ProductList>
      </CartProducts>
      <ResumeCart />
    </Container>
  );
}
