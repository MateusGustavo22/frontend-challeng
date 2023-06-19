import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { FilterContext } from "@/context/FilterContext";

export default function useProducts() {
  const {productsType, productsPriority, productsOrder, page} = useContext(FilterContext)

  const ALL_PRODUCTS_QUERY = `query {
    allProducts(sortField: "${productsPriority}", sortOrder: "${productsOrder}", page: ${page} perPage: 20) {
      id
      name
      image_url
      price_in_cents
      category
    }
  }`;

  const PRODUCTS_FOR_TYPE_QUERY = `query {
    allProducts(filter: {category: "${productsType}"}, sortField: "${productsPriority}", sortOrder: "${productsOrder}", page: ${page} perPage: 20) {
      id
      name
      price_in_cents
      image_url
      sales
    }
  }`;

  const QUERY = gql`
    ${productsType === 'all' ? ALL_PRODUCTS_QUERY : PRODUCTS_FOR_TYPE_QUERY}
  `;

  const { data, loading } = useQuery(QUERY);

  return {products: data?.allProducts, loading}
}
