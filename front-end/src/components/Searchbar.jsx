import { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../contexts/ShopContext'

const Searchbar = () => {
  const { search } = useContext(ShopContext)
  const { searchTerm, setSearchTerm, toggleSearch } = search
  return (
    <>
      <form className='inline-flex items-center border border-gray-400 rounded-full px-5 py-2 mx-3 my-5 w-3/4 sm:w-1/2'>
        <input
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className='flex-1 outline-0 text-sm'
        />
        <img src={assets.search_icon} alt='Search' className='w-4' />
      </form>
      <img
        src={assets.cross_icon}
        alt=''
        className='inline w-3 cursor-pointer'
        onClick={() => {
          toggleSearch()
          setSearchTerm('')
        }}
      />
    </>
  )
}

export default Searchbar
