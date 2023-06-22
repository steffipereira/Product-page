import { Container } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import { useRefreshedQuery } from '../query/queries'
import { Header } from '../components/Header/Header'

export const Products = () => {
  const { data } = useRefreshedQuery()
  const productId = data && data.allProducts[0].id

  return (
    <Container py="3">
      <Link to={`/products/${productId}`}>Go to Product {productId}</Link>
      <Header />
      <Outlet />
    </Container>
  )
}
