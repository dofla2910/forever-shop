const SelectSize = ({ sizes, selectedSize, setSelectedSize }) => {
  return (
    <div className='flex flex-col gap-4'>
      <p>Select Size</p>
      <div className='flex gap-2'>
        {sizes.map((size, index) => (
          <button
            key={index}
            className={
              'border py-2 px-4 bg-gray-100 cursor-pointer ' +
              (selectedSize === size ? 'border-amber-400' : 'border-gray-200')
            }
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectSize
