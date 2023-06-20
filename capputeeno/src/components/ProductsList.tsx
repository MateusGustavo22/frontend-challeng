'use client';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import useProducts from '@/hooks/useProducts';
import formatPrice from '@/utils/formatPrice';
import LoadMore from './LoadMore';
import Loading from './Loading';
import { useEffect, useState } from 'react';

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
  price_in_cents: number;
}

export default function ProductList() {
  const { products, loading } = useProducts();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      {windowWidth > 800 ? <LoadMore /> : null}
      {products.map((item: ProductType) => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          image_url={item.image_url}
          price={formatPrice(item.price_in_cents)}
        />
      ))}
      {products ? <LoadMore /> : null}
    </Container>
  );
}
