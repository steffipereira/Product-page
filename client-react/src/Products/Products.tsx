import { Container } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { useRefreshedQuery } from '../query/queries'

export const Products = () => {
  const { data } = useRefreshedQuery()
  const productId = data && data.allProducts[0].id

  return (
    <Container maxW="5xl" py={3}>
      <Link to={`/products/${productId}`}>Go to Product {productId}</Link>
      <Outlet />
    </Container>
  )
}
