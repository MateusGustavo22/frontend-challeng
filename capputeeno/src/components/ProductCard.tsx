'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Container = styled.div`
  width: 256px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px 8px 12px;

  span {
    font-size: 1rem;
    color: var(--text-dark);
  }

  div {
    width: 100%;
    height: 1px;
    background-color: #dce2e6;
  }
`;

const Price = styled.span`
  font-size: 0.875rem;
  color: var(--text-tooltip);
  font-weight: 600;
`;

interface ProductProps {
  id?: number;
  name: string;
  image_url: string;
  price: string;
}

export default function ProductCard({ id, name, image_url, price }: ProductProps) {
  return (
    <Container>
      <Link href={`/product?id=${id}`}>
        <Image priority width={252} height={300} src={image_url} alt='Imagem do produto'/>
      </Link>
      <Info>
        <span>{name}</span>
        <div></div>
        <Price>{price}</Price>
      </Info>
    </Container>
  );
}
