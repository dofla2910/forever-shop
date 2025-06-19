import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex gap-2 items-center'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='uppercase font-medium text-sm md:text-base'>Our BestSellers</p>
          </div>
          <h1 className='font-prata text-3xl lg:text-5xl sm:py-3 leading-relaxed lg:leading-none'>Latest Arrivals</h1>
          <div className='flex gap-2 items-center'>
            <p className='uppercase font-medium text-sm md:text-base'>Shop Now</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      <img src={assets.hero_img} alt='Latest Arrivals' className='w-full sm:w-1/2' />
    </div>
  )
}

export default Hero
