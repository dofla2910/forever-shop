import React from 'react'

const Collection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <div className='border border-gray-300 pl-5 py-3 mt-6 hidden sm:block'>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type='checkbox' value='Men' className='w-3' />
              Men
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Women' className='w-3' />
              Women
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Kids' className='w-3' />
              Kids
            </label>
          </div>
        </div>
        <div className='border border-gray-300 pl-5 py-3 my-5 hidden sm:block'>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type='checkbox' value='Topwear' className='w-3' />
              Topwear
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Bottomwear' className='w-3' />
              Bottomwear
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='Winterwear' className='w-3' />
              Winterwear
            </label>
          </div>
        </div>
      </div>
      <div></div>
      {/* Product Display */}
    </div>
  )
}

export default Collection
