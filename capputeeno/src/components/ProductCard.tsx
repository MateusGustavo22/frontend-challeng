"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 256px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 256px;
    height: 300px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 12px 8px 12px;
`;

const Name = styled.span`
  font-size: 1rem;
  color: var(--text-dark);
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dce2e6;
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
  price: string
}

export default function ProductCard({ name, image_url, price }: ProductProps) {
  return (
    <Container>
      <img src={image_url} />
      <Info>
        <Name>{name}</Name>
        <Line></Line>
        <Price>{price}</Price>
      </Info>
    </Container>
  );
}
