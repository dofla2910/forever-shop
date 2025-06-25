const SelectSize = ({ sizes }) => {
  return (
    <div className='flex flex-col gap-4'>
      <p>Select Size</p>
      <div className='flex gap-2'>
        {sizes.map((size, index) => (
          <button key={index} className='border border-gray-200 py-2 px-4 bg-gray-100 cursor-pointer'>
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectSize
