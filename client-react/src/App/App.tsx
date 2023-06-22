import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Products } from '../Products/Products'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Products />}>
      </Route>
    )
  )
  return (<RouterProvider router={router} />)
}

export default App
