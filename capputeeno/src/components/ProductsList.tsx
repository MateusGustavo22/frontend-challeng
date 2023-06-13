"use client";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import useProducts from "@/hooks/useProducts";
import formatPrice from "@/utils/format-price";
import LoadMore from "./LoadMore";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
  justify-content: center;
`;

interface ProductType {
  id: number;
  name: string;
  image_url: string;
  price_in_cents: number
}

export default function ProductList() {
  const products = useProducts();

  return (
    <Container>
      <LoadMore />
      {products ? (
        products.map(
          (item:ProductType) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              image_url={item.image_url}
              price={formatPrice(item.price_in_cents)}
            />
          )
        )
      ) : (
        <span>Carregando...</span>
      )}
    </Container>
  );
}
