'use client';
import styled from 'styled-components';
import AddProduct from '../AddProduct';
import formatPrice from '@/utils/formatPrice';
import Image from 'next/image';
import Trash from '../icons/trash-icon';

const Container = styled.div`
  max-width: 736px;
  max-height: 211px;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  position: relative;
  display: flex;
  border-radius: 8px;

  @media screen and (max-width: 660px) {
    max-height: 300px;
    padding: 4px;
  }
`;

const ProductImage = styled.div`
  max-width: 256px;
  width: 100%;
  position: unset !important;
  flex-shrink: 0;

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }

  @media screen and (max-width: 660px) {
    overflow: hidden;
    border-radius: 4px;
    max-width: 100px;
    height: 90px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;

  svg {
    position: absolute;
    right: 0;
  }
`;

const Remove = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Product = styled.div`
  padding: 16px 32px 16px 32px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 660px) {
    padding: 12px;
  }
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

  @media screen and (max-width: 660px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  max-height: 64px;
  overflow: hidden;
  font-size: 0.8125rem;
  color: var(--text-dark);

  @media screen and (max-width: 660px) {
    font-size: 0.75rem;
  }
`;

const Price = styled.span`
  font-size: 1rem;
  color: var(--text-tooltip);
  font-weight: 600;
`;

interface Props {
  id: number;
  name: string;
  image_url: string;
  price_in_cents: number;
  description: string;
  removeItem: (id: number) => void;
}

export default function CartProduct({ id, name, image_url, price_in_cents, description, removeItem }: Props) {
  const priceFormatted = formatPrice(price_in_cents);

  return (
    <Container>
      <ProductImage>
        <Image priority fill={true} src={image_url} alt="Imagem do produto" />
      </ProductImage>
      <Product>
        <Info>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Remove onClick={() => removeItem(id)}>
            <Trash />
          </Remove>
        </Info>
        <ItemResume>
          <AddProduct />
          <Price>{priceFormatted}</Price>
        </ItemResume>
      </Product>
    </Container>
  );
}
