import React, { useState } from 'react'
import {
  Image,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  HStack,
  Button,
  Badge,
} from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCT } from '../query/queries'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'

export const Product = () => {
  const { id } = useParams()
  const { data, error, loading } = useQuery(GET_PRODUCT, { variables: { id } })
   const [basketQty, setBasketQty] = useState(0)
   const [qty, setQty] = useState(1)

  const handleAddToCart = (e: React.MouseEvent, qty: number) => {
    e.preventDefault()
    setBasketQty(qty)
  }

  if (loading || !data) return <>Loading</>
  if (error) return <>error</>

  if (data) {
    const {
      name,
      power,
      description,
      price,
      quantity,
      brand,
      weight,
      height,
      width,
      length,
      model_code,
      colour,
      img_url,
    } = data.Product

    const formattedPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
    }).format(Math.round(price) / 100)

    return (
      <>
        <Header>
          <Badge bg="sohoLights" title="Basket items">{!!basketQty && basketQty}</Badge>
        </Header>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image rounded="3xl" alt={name} src={img_url} objectFit="cover" />
          </Flex>
          <Stack spacing={2}>
            <Heading as="h1">{name}</Heading>
            <Text color="purpleHaze" fontSize="xs" fontWeight="600" m={0}>
              {`${power} // Packet of ${quantity}`}
            </Text>
            <Stack py={2}>
              <Flex pt={5} alignItems="end" justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold">
                  {formattedPrice}
                </Text>
                <Flex flexDirection="column" alignItems="center">
                  <Text fontSize="xx-small">Qty</Text>
                  <HStack>
                    <Button
                      size="xs"
                      borderRadius="lg"
                      isDisabled={qty === 1}
                      bg={qty === 1 ? 'plum' : 'sohoLights'}
                      color={qty === 1 ? 'white' : 'black'}
                      onClick={() => setQty(qty - 1)}
                    >
                      -
                    </Button>
                    <Text fontSize="lg" fontWeight="bold" title="Current quantity">
                      {qty}
                    </Text>
                    <Button size="xs" borderRadius="lg" bg="sohoLights" onClick={() => setQty(qty + 1)}>
                      +
                    </Button>
                  </HStack>
                </Flex>
              </Flex>
              <Button
                bg="sohoLights"
                onClick={(e) => handleAddToCart(e, qty)}>
                Add to cart
              </Button>
            </Stack>
            <Stack spacing={{ base: 4, sm: 6 }} bg="hemocyanin" py={3}>
              <Text fontSize="xl" fontWeight="medium">
                Description
              </Text>
              <Text fontSize="sm" lineHeight="tall">
                {description}
              </Text>
            </Stack>
            <Stack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize="xl" fontWeight="medium">
                Specifications
              </Text>
              <SimpleGrid columns={2} spacing={1} gridGap={4}>
                <Text fontSize="xs">Brand</Text>
                <Text fontSize="xs">{brand}</Text>
                <Text fontSize="xs">Item weight(g)</Text>
                <Text fontSize="xs">{weight}</Text>
                <Text fontSize="xs">Dimensions(cm)</Text>
                <Text fontSize="xs">
                  {width} x {height} x {length}
                </Text>
                <Text fontSize="xs">Item Model number</Text>
                <Text fontSize="xs">{model_code}</Text>
                <Text fontSize="xs">Color</Text>
                <Text fontSize="xs">{colour}</Text>
              </SimpleGrid>
            </Stack>
          </Stack>
        </SimpleGrid>
      </>
    )
  }
  return null
}
