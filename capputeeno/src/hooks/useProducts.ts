import { useQuery, gql } from '@apollo/client';
import { useContext, useDeferredValue, useEffect } from 'react';
import { FilterContext } from '@/context/FilterContext';
import ProductCartType from '@/types/products-cart';

export default function useProducts() {
  const { productsType, productsPriority, productsOrder, page, searchTerm } = useContext(FilterContext);
  const searchDeferred = useDeferredValue(searchTerm);

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

  let filteredProducts = data?.allProducts || [];
  if (searchDeferred) {
    const searchLower = searchDeferred.toLowerCase();
    filteredProducts = filteredProducts.filter((product: ProductCartType) => product.name.toLowerCase().includes(searchLower));
  }

  return { products: filteredProducts, loading };
}
