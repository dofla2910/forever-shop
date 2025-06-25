import { useState } from 'react'

const ImageGallery = ({ imageList }) => {
  const [currImg, setCurrImg] = useState(imageList[0])
  return (
    <div className='flex flex-col-reverse sm:flex-row gap-3 h-full'>
      <div className='flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[19%]'>
        {imageList.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=''
            onClick={() => {
              setCurrImg(imageList[index])
            }}
            className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
          />
        ))}
      </div>
      <div className='w-full sm:w-[80%]'>
        <img src={currImg} alt='' className='w-full h-auto' />
      </div>
    </div>
  )
}

export default ImageGallery
