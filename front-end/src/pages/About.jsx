import Title from '../components/Title'
import TextBlock from '../components/TextBlock'
import { assets } from '../assets/frontend_assets/assets'
import Subscribe from '../components/Subscribe'
import FlexImageWithDes from '../layouts/FlexImageWithDes'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-8 pb-3 border-t border-gray-200'>
        <Title first='About' second='Us' />
      </div>
      <FlexImageWithDes src={assets.about_img}>
        <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our
          journey began with a simple idea: to provide a platform where customers can easily discover, explore, and
          purchase a wide range of products from the comfort of their homes.
        </p>
        <p>
          Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater
          to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an
          extensive collection sourced from trusted brands and suppliers.
        </p>
        <b class='text-gray-800'>Our Mission</b>
        <p>
          Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to
          providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and
          beyond.
        </p>
      </FlexImageWithDes>
      <div className='text-xl pt-4 pb-7'>
        <Title first='Why' second='choose us' />
      </div>
      <div className='flex flex-col sm:flex-row text-sm text-pretty mb-20'>
        <TextBlock title='Quality Assurance'>
          We meticulously select and vet each product to ensure it meets our stringent quality standards.
        </TextBlock>
        <TextBlock title='Convenience'>
          With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
        </TextBlock>
        <TextBlock title='Exceptional Customer Service'>
          Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top
          priority.
        </TextBlock>
      </div>
      <Subscribe />
    </div>
  )
}

export default About
