const SortBySelect = ({ values }) => {
  return (
    <select
      name='sort'
      className='border-2 border-gray-300 p-2 text-sm rounded-md focus:outline-none focus:border-gray-400'
      defaultValue=''
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
