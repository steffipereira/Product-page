import { Product } from '../Product/Product'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Products } from '../Products/Products'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Products />}>
        <Route path="products">
          <Route path=":id" element={<Product />} />
        </Route>
      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App
