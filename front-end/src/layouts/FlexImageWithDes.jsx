const FlexImageWithDes = ({ src, children }) => {
  return (
    <div className='flex flex-col lg:flex-row items-stretch gap-4 lg:gap-16 my-10 text-gray-600 text-justify transition'>
      <img
        src={src}
        alt=''
        className='w-full object-cover aspect-[16/9] sm:aspect-[8/3] md:aspect-[16/5] lg:aspect-auto lg:max-w-[450px]'
      />
      <div className='flex flex-col items-start lg:justify-center gap-6 lg:w-1/2'>{children}</div>
    </div>
  )
}

export default FlexImageWithDes
