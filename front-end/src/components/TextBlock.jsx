const TextBlock = ({ title, children }) => {
  return (
    <div className='flex flex-col gap-5 px-10 md:px-16 py-8 md:py-20 border border-gray-200'>
      <b>{title}:</b>
      <p className='text-gray-600'>{children}</p>
    </div>
  )
}

export default TextBlock
