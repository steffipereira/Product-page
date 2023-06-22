import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react';

export const GET_ALL_PRODUCTS = gql`
  query allProducts {
   allProducts {
      id
    }
  }
`;

export const useRefreshedQuery = () => {
  const queryResponse = useQuery(GET_ALL_PRODUCTS)

  useEffect(() => {
    queryResponse.refetch()
  },[queryResponse])

  return queryResponse
}