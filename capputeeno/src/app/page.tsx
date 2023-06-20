'use client';
import FilterBar from '@/components/FilterBar';
import ProductList from '@/components/ProductsList';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import FilterMobileMenu from '@/components/FilterMobileMenu';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <FilterBar />
      <FilterMobileMenu />
      <ProductList />
    </ApolloProvider>
  );
}
