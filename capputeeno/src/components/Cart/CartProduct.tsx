'use client';
import styled from 'styled-components';
import AddProduct from '../AddProduct';
import formatPrice from '@/utils/formatPrice';
import Image from 'next/image';

const Container = styled.div`
  max-width: 736px;
  max-height: 211px;
  background-color: white;
  position: relative;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
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

const ItemResume = styled.div`
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
  max-height: 64px;
  overflow: hidden;
  font-size: 0.8125rem;
  color: var(--text-dark);
`;

const Price = styled.span`
  font-size: 1rem;
  color: var(--text-tooltip);
  font-weight: 600;
`;

interface Props {
  name: string;
  image_url: string;
  price_in_cents: number;
  description: string;
}

export default function CartProduct({ name, image_url, price_in_cents, description }: Props) {
  const priceFormatted = formatPrice(price_in_cents);

  return (
    <Container>
        <Image priority width={256} height={211} src={image_url} alt="Imagem do produto" />
      <Product>
        <Info>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Info>
        <ItemResume>
          <AddProduct />
          <Price>{priceFormatted}</Price>
        </ItemResume>
      </Product>
    </Container>
  );
}
