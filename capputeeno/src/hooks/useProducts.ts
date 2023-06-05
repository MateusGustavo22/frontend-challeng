import { useQuery, gql } from "@apollo/client";

export default function useProducts() {
  const QUERY = gql`
    query {
      allProducts {
        id
        name
        image_url
        price_in_cents
      }
    }
  `;

  const { data, loading } = useQuery(QUERY);

  return data?.allProducts;
}
