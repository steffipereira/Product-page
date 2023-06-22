import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { GET_PRODUCT } from '../query/queries'
import { Product } from './Product'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}))

describe('Product', () => {
  describe('should render product details when data is available', () => {
    const mockProductId = '1'
    const mockProductData = {
      id: '1',
      name: 'Product Name',
      power: 'Product Power',
      description: 'Product Description',
      price: 10.99,
      quantity: 1,
      brand: 'Product Brand',
      weight: 200,
      height: 10,
      width: 20,
      length: 30,
      model_code: 'ABC123',
      colour: 'Product Colour',
      img_url: 'product-image.jpg',
    }

    const mocks = [
      {
        request: {
          query: GET_PRODUCT,
          variables: { id: mockProductId },
        },
        result: {
          data: {
            Product: mockProductData,
          },
        },
      },
    ]

    const renderProduct = () =>
      render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Product />
        </MockedProvider>
      )
    test('should be able to increase and decrease product quantity', async () => {
      renderProduct()

      await waitFor(() => {
        expect(screen.getByText(mockProductData.name)).toBeInTheDocument()
      })

      const increaseQuantity = screen.getByRole('button', { name: '+' })
      const decreaseQuantity = screen.getByRole('button', { name: '-' })
      const currentQuantity = screen.getByTitle('Current quantity')

      expect(currentQuantity).toHaveTextContent('1')

      fireEvent.click(increaseQuantity)
      expect(currentQuantity).toHaveTextContent('2')

      fireEvent.click(decreaseQuantity)
      expect(currentQuantity).toHaveTextContent('1')
    })
    test('should be able to add items to the basket', async () => {
      renderProduct()

      await waitFor(() => {
        expect(screen.getByText(mockProductData.name)).toBeInTheDocument()
      })

      const increaseQuantity = screen.getByRole('button', { name: '+' })
      const currentQuantity = screen.getByTitle('Current quantity')

      fireEvent.click(increaseQuantity)
      fireEvent.click(increaseQuantity)
      fireEvent.click(increaseQuantity)

      expect(currentQuantity).toHaveTextContent('4')

      const addToBasketElement = screen.getByRole('button', { name: 'Add to cart' })
      fireEvent.click(addToBasketElement)

      const basketItems = screen.getByTitle('Basket items')

      expect(basketItems).toHaveTextContent('4')
    })
  })
})
