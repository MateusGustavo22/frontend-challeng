'use client';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import Product from '@/components/Product';
import BackButton from '@/components/BackButton';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProductPage({ searchParams }: { searchParams: { id: string } }) {
  const productId = searchParams.id;

  return (
    <ApolloProvider client={client}>
      <Container>
        <BackButton />
        <Product id={productId} />
      </Container>
    </ApolloProvider>
  );
}
