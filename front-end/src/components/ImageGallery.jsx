const ImageGallery = ({ imageList }) => {
  return (
    <div className='w-full h-full flex gap-4'>
      <div className='w-1/9'>
        {imageList.map((image) => (
          <img key={image} src={image} alt='' className='w-[24%] sm:w-full sm:mb-3' />
        ))}
      </div>
      <div>
        <img src={imageList[0]} alt='' className='w-full h-auto' />
      </div>
    </div>
  )
}

export default ImageGallery
