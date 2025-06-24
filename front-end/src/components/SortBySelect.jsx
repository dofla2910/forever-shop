const SortBySelect = ({ options, defaultValue, changeMethod }) => {
  return (
    <select
      name='sort'
      className='border-2 border-gray-300 p-2 text-sm rounded-md focus:outline-none focus:border-gray-400'
      defaultValue={defaultValue}
      onChange={(e) => {
        changeMethod(e.target.value)
      }}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          Sort by: {option.value}
        </option>
      ))}
    </select>
  )
}

export default SortBySelect
