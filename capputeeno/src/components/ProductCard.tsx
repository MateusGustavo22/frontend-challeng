"use client";
import styled from "styled-components";

const Container = styled.div`
  width: 256px;
  background-color: white;
`;

const Image = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: gray;
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

export default function ProductCard() {
  return (
    <Container>
      <Image></Image>
      <Info>
        <Name>Caneca de cerâmica rústica</Name>
        <Line></Line>
        <Price>R$ 40,00</Price>
      </Info>
    </Container>
  );
}
