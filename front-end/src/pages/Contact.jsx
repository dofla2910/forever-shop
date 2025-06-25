import { assets } from '../assets/frontend_assets/assets'
import Subscribe from '../components/Subscribe'
import Title from '../components/Title'
import FlexImageWithDes from '../layouts/FlexImageWithDes'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-8 pb-3 border-t border-gray-200'>
        <Title first='Contact' second='us' />
      </div>
      <FlexImageWithDes src={assets.contact_img}>
        <b className='text-gray-800'>Our Store</b>
        <p>
          54709 Willms Station <br />
          Suite 350, Washington, USA
        </p>
        <p>
          Tel: (415) 555-0132 <br />
          Email: admin@forever.com
        </p>
        <b className='text-gray-800'>Careers at Forever</b>
        <p>Learn more about our teams and job openings.</p>
      </FlexImageWithDes>
      <Subscribe />
    </div>
  )
}

export default Contact
