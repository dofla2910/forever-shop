import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useLocation } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import Rating from '../components/Rating'

const Product = () => {
  const [product, setProduct] = useState(null)
  const { products } = useContext(ShopContext)
  const location = useLocation()

  useEffect(() => {
    const productId = location.pathname.split('/').pop()
    // console.log('Product ID:', productId)
    const foundProduct = products.find((p) => p._id === productId)
    console.log('Found Product:', foundProduct)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [location.pathname, products])

  return (
    <div className='border-t-2 border-gray-200 pt-10'>
      {product ? (
        <div className='flex flex-col items-stretch gap-12 lg:flex-row'>
          <ImageGallery imageList={product.image} />
          <div className='w-full'>
            <p>{product.name}</p>
            <Rating rate={4} quantity={122} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Product
