const FilterBox = ({ title, values, filterValues = [], changeMethod }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target
    let newFilterValues
    if (checked) {
      newFilterValues = [...filterValues, value]
    } else {
      newFilterValues = filterValues.filter((v) => v !== value)
    }
    changeMethod(newFilterValues)
  }

  return (
    <div className={`border border-gray-300 pl-5 py-3 sm:block`}>
      <p className='mb-3 text-sm font-medium uppercase'>{title}</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
        {values.map((value, index) => (
          <label key={index} className='flex gap-2'>
            <input
              type='checkbox'
              value={value}
              className='w-3'
              name={value}
              checked={filterValues.includes(value)}
              onChange={handleChange}
            />
            {value}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterBox
