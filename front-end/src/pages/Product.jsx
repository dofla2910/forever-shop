import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import { useLocation } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import Rating from '../components/Rating'
import SelectSize from '../components/SelectSize'
import PrimaryButton from '../components/PrimaryButton'

const Product = () => {
  const [product, setProduct] = useState(null)
  const { products, currency } = useContext(ShopContext)
  const location = useLocation()

  useEffect(() => {
    const productId = location.pathname.split('/').pop()
    // console.log('Product ID:', productId)
    const foundProduct = products.find((p) => p._id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [location.pathname, products])

  return (
    <div className='border-t-2 border-gray-200 pt-10 text-justify'>
      {product ? (
        <div className='flex flex-col items-stretch gap-12 sm:flex-row'>
          <div className='flex-1 sm:max-h-96'>
            <ImageGallery imageList={[...product.image, ...product.image, ...product.image]} />
          </div>
          <div className='flex-1'>
            <p className='text-2xl font-medium my-2'>{product.name}</p>
            <Rating rate={4} quantity={122} />
            <p className='text-3xl my-5'>
              {currency.symbol}
              {product.price}
            </p>
            <p className='text-gray-500 mb-8'>{product.description}</p>
            <SelectSize sizes={product.sizes} />
            <PrimaryButton className='my-8'>Add to Cart</PrimaryButton>
            <hr className='text-gray-300 sm:w-4/5' />
            <div className='text-gray-500 text-sm flex flex-col gap-1 mt-5'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Product
