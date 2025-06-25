import { ShopContext } from './ShopContext'
import { products } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

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

  const [search, setSearch] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev)
  }

  const value = {
    products,
    currency,
    deliveryFee,
    search: {
      searchTerm: search,
      setSearchTerm: setSearch,
      visibleSearch: searchVisible,
      toggleSearch: toggleSearch
    }
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export default ShopProvider
