'use client';
import styled from 'styled-components';
import ButtonShoppingIcon from './icons/button-shopping-icon';
import useProduct from '@/hooks/useProduct';
import formatPrice from '@/utils/formatPrice';
import { categoryNames } from '@/types/enum-props';
import { getCartItems, addToCart } from '@/utils/localStorageUtil';
import Loading from './Loading';
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

const ProductImage = styled.div`
  min-width: 640px;
  height: 580px;
  background-color: gray;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductIfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  color: var(--text-dark);
  font-size: 1rem;
  margin-bottom: 12px;
`;

const Name = styled.div`
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-size: 1.3rem;
  color: var(--text-tooltip);
  font-weight: 600;
  margin-bottom: 24px;
`;

const FreighMensage = styled.div`
  font-size: 0.85rem;
  color: var(--text-dark);
`;

const DescriptionLabel = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-top: 58px;
  margin-bottom: 8px;
`;

const Description = styled.span`
  font-size: 1rem;
  color: var(--text-dark);
`;

const AddCartButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #115d8c;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  outline: none;
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  font-family: inherit;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #05334f;
  }
`;

interface ProductProps {
  productId: string;
}

export default function Product({ productId }: ProductProps) {
  const { product, loading } = useProduct(productId);

  const category = categoryNames[product?.category as keyof typeof categoryNames];
  const price = formatPrice(product?.price_in_cents);

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <ProductImage>
        <Image priority width={640} height={580} src={product?.image_url} alt="Imagem do produto" />
      </ProductImage>
      <ProductIfo>
        <Info>
          <Category>{category}</Category>
          <Name>{product?.name}</Name>
          <Price>{price ? price : null}</Price>
          <FreighMensage>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</FreighMensage>
          <DescriptionLabel>Descrição</DescriptionLabel>
          <Description>{product?.description}</Description>
        </Info>
        <AddCartButton onClick={handleAddToCart}>
          <ButtonShoppingIcon />
          Adicionar ao carrinho
        </AddCartButton>
      </ProductIfo>
    </Container>
  );
}
