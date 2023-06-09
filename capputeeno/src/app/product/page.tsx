'use client';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import Product from '@/components/Product';
import BackButton from '@/components/BackButton';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export default function ProductPage({ searchParams }: { searchParams: { id: string } }) {
  const productId = searchParams.id;

  return (
    <ApolloProvider client={client}>
      <Container>
        <BackButton />
        <Product productId={productId} />
      </Container>
    </ApolloProvider>
  );
}
