"use client"
import FilterBar from "@/components/FilterBar";
import ProductList from "@/components/ProductsList";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div className="main_container">
        <FilterBar />
        <ProductList />
      </div>
    </ApolloProvider>
  );
}
