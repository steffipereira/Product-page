import { gql, useQuery } from '@apollo/client'
import { useEffect } from 'react';

export const GET_ALL_PRODUCTS = gql`
  query allProducts {
   allProducts {
      id
    }
  }
`;

export const GET_PRODUCT = gql`
  query product($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
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