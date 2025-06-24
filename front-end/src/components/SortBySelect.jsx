const SortBySelect = ({ values, defaultValue, changeMethod }) => {
  return (
    <select
      name='sort'
      className='border-2 border-gray-300 p-2 text-sm rounded-md focus:outline-none focus:border-gray-400'
      defaultValue={defaultValue}
      onChange={(e) => {
        changeMethod(e.target.value)
        console.log(`Selected sort option: ${e.target.value}`) // Debugging log
      }}
    >
      {values.map((value, index) => (
        <option key={index} value={value}>
          Sort by: {value}
        </option>
      ))}
    </select>
  )
}

export default SortBySelect
