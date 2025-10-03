import { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../contexts/ShopContext'
const RelatedProduct = ({ category, type }) => {
  const { product } = useContext(ShopContext)

  return (
    <div className='text-3xl'>
      <Title first={'Related'} second={'Products'} />
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'></div>
    </div>
  )
}

export default RelatedProduct
