'use client';
import styled from 'styled-components';
import ButtonShoppingIcon from './icons/button-shopping-icon';
import useProduct from '@/hooks/useProduct';
import formatPrice from '@/utils/format-price';
import { categoryNames } from '@/types/types-names';

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
`;

const ProductImage = styled.div`
  min-width: 640px;
  height: 580px;
  background-color: gray;
`;

const InfoContainer = styled.div`
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
  font-size: 0.75rem;
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
  font-size: 0.875rem;
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
`;

interface Props {
  id: string;
}

export default function Product({ id }: Props) {
  const productInfo = useProduct(id);
  console.log(productInfo);

  const category = categoryNames[productInfo?.category as keyof typeof categoryNames];
  const price = formatPrice(productInfo?.price_in_cents);

  return (
    <Container>
      <ProductImage>
        <img src={productInfo?.image_url} width={640} height={580} alt="Imagem do produto" />
      </ProductImage>
      <InfoContainer>
        <Info>
          <Category>{category}</Category>
          <Name>{productInfo?.name}</Name>
          <Price>{price ? price : null}</Price>
          <FreighMensage>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</FreighMensage>
          <DescriptionLabel>Descrição</DescriptionLabel>
          <Description>{productInfo?.description}</Description>
        </Info>
        <AddCartButton>
          <ButtonShoppingIcon />
          Adicionar ao carrinho
        </AddCartButton>
      </InfoContainer>
    </Container>
  );
}
