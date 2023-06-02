"use client"
import styled from "styled-components"
import ProductCard from "./ProductCard"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`

export default function ProductList() {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  )
}