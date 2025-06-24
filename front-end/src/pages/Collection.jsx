import { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import FilterBox from '../components/FilterBox'
import Title from '../components/Title'
import SortBySelect from '../components/SortBySelect'
import { ShopContext } from '../contexts/ShopContext'
import ProductItem from '../components/ProductItem'
import { Link } from 'react-router'

const sortByOptions = [
  {
    value: 'Relavent',
    method: (a, b) => a._id.localeCompare(b._id)
  },
  {
    value: 'High to Low',
    method: (a, b) => b.price - a.price
  },
  {
    value: 'Low to High',
    method: (a, b) => a.price - b.price
  },
  {
    value: 'Newest',
    method: (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  }
]
const categoryOptions = ['Men', 'Women', 'Kids']
const typeOptions = ['Topwear', 'Bottomwear', 'Winterwear']

const Collection = () => {
  const [productList, setProductList] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [filterVisible, setFilterVisible] = useState(false)
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [sortByValue, setSortByValue] = useState('Relavent')
  const { products } = useContext(ShopContext)

  useEffect(() => {
    setProductList(products)
  }, [products])

  useEffect(() => {
    setFilteredProducts(
      productList.filter((product) => {
        const matchesCategory = category.includes(product.category) || category.length === 0
        const matchesType = type.includes(product.subCategory) || type.length === 0
        return matchesCategory && matchesType
      })
    )
  }, [category, type, productList])

  const handleSortChange = (value) => {
    setSortByValue(value)
    const sortMethod = sortByOptions.find((option) => option.value === value)?.method
    if (sortMethod) {
      setFilteredProducts((prevProducts) => [...prevProducts].sort(sortMethod))
    }
  }

  return (
    <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-10'>
      {/* Filter Options */}
      <div className='min-w-40'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setFilterVisible((prev) => !prev)}
        >
          FILTERS{' '}
          <img
            src={assets.dropdown_icon}
            alt='Filter'
            className={`w-2 md:hidden ` + (filterVisible ? 'rotate-90' : 'rotate-0')}
          />
        </p>
        <div className={`flex-col gap-4 mt-4 ` + (filterVisible ? 'flex' : 'hidden md:flex')}>
          <FilterBox title='Categories' values={categoryOptions} filterValues={category} changeMethod={setCategory} />
          <FilterBox title='Type' values={typeOptions} filterValues={type} changeMethod={setType} />
        </div>
      </div>
      {/* Product Display */}
      <div className='w-full'>
        <div className='flex justify-between items-center text-2xl'>
          <Title first='All' second='Collections' />
          <SortBySelect options={sortByOptions} defaultValue={sortByValue} changeMethod={handleSortChange} />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-4'>
          {filteredProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id} className='text-gray-700 cursor-pointer'>
              <ProductItem product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
