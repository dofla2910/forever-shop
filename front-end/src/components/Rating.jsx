import { assets } from '../assets/frontend_assets/assets'

const Rating = ({ rate, quantity, className }) => {
  const stars = [0, 1, 2, 3, 4].map((index) => (
    <span key={index} className='w-3'>
      {getStarIcon(index, rate)}
    </span>
  ))

  return (
    <div className={'flex items-center gap-1 ' + className}>
      {stars} <span className='pl-2'>({quantity})</span>
    </div>
  )
}

const getStarIcon = (index, rate) => {
  if (index < rate) {
    return <img src={assets.star_icon} alt='' />
  } else {
    return <img src={assets.star_dull_icon} alt='' />
  }
}

export default Rating
