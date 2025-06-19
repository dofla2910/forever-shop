import { ShopContext } from './ShopContext'
import { products } from '../../assets/frontend_assets/assets'

const ShopProvider = ({ children }) => {
  const currency = {
    symbol: '$',
    name: 'USD',
    decimalPlaces: 1
  }

  const deliveryFee = {
    amount: 10.0,
    currency: 'USD',
    description: 'Standard delivery fee'
  }

  const value = {
    products,
    currency,
    deliveryFee
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
