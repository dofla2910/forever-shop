import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import About from './pages/About'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Product from './pages/Product'
import Order from './pages/Order'
import DefaultLayout from './layouts/DefaultLayout'

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/order' element={<Order />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </DefaultLayout>
  )
}

export default App
