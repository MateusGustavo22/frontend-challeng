'use client';
import BackButton from '@/components/BackButton';
import ResumeCart from '@/components/cart/ResumeCart';
import styled from 'styled-components';
import CartProduct from './CartProduct';
import ProductCartType from '@/types/products-cart';
import formatPrice from '@/utils/formatPrice';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1160px) {
    justify-content: center;
  }
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

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 16px;
`;

const CartSection = styled.span`
  font-size: 1.5rem;
  color: var(--text-dark);
  font-weight: 600;
  margin-bottom: 6px;
`;

interface CartProductProps {
  cartItems: ProductCartType[];
  removeItem: (id: number) => void;
}

export default function CartProducts({ cartItems, removeItem }: CartProductProps) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price_in_cents, 0);
  const formattedPrice = formatPrice(totalPrice)

  return (
    <Container>
      <CartInfo>
        <BackButton />
        <CartSection>SEU CARRINHO</CartSection>
        <span>
          Total ({cartItems.length} {cartItems.length > 1 ? 'produtos' : 'produto'}) <Total>{formattedPrice}</Total> 
        </span>
      </CartInfo>
      <ProductList>
        {cartItems.map((item: ProductCartType) => (
          <CartProduct
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price_in_cents={item.price_in_cents}
            image_url={item.image_url}
            removeItem={removeItem}
          />
        ))}
      </ProductList>
      <ResumeCart totalPrice={totalPrice}/>
    </Container>
  );
}
