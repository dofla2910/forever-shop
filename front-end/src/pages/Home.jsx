import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Subscribe from '../components/Subscribe'
import ValueProposition from '../components/ValueProposition'

const Home = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Hero />
      <div className='my-10'>
        <LatestCollection />
      </div>
      <div className='my-10'>
        <BestSeller />
      </div>
      <ValueProposition />
      <Subscribe />
    </div>
  )
}

export default Home
