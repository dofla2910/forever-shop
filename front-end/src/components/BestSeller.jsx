import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'
import { Link } from 'react-router'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLatestProducts([...products].sort(() => Math.random() - 0.5).slice(0, 5))
  }, [products])

  return (
    <>
      <div className='text-center py-8 text-3xl'>
        <Title first='Best' second='Seller' />
        <p className='w-3/4 m-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our most-loved products chosen by thousands. Trusted quality that speaks for itself.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.slice(0, 10).map((product) => {
          return (
            <Link to={`/product/${product._id}`} key={product._id} className='text-gray-700 cursor-pointer'>
              <ProductItem product={product} />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default BestSeller
