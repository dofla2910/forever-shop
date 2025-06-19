import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt='Forever' className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-900 font-medium mb-2'>
            Forever - Timeless Style, Everyday Confidence
          </p>
          <p className='w-full md:w-2/3 text-gray-600 text-justify'>
            At Forever, we believe fashion should be effortless, expressive, and accessible. From everyday essentials to
            trend-forward pieces, our collections are designed to help you look and feel your best—always. Discover your
            forever favorites with us.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li className='cursor-pointer'>Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='text-gray-200' />
        <p className='py-5 text-sm text-center'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
