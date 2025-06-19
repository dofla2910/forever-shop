import { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'

const ProductItem = ({ product }) => {
  const { currency } = useContext(ShopContext)
  const { name, image, price } = product
  return (
    <div>
      <div className='overflow-hidden'>
        <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency.symbol}
        {price}
      </p>
    </div>
  )
}

export default ProductItem
