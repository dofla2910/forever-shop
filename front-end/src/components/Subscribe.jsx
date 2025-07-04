import PrimaryButton from './PrimaryButton'

const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribed with email:', e.target.email.value)
  }

  return (
    <div className='text-center w-full'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Be the first to know about new arrivals and exclusive deals.</p>
      <form
        onSubmit={handleSubmit}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 border-gray-200'
      >
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          required
          className='w-full sm:flex-1 outline-none border-none'
        />
        <PrimaryButton type='submit'>Subscribe</PrimaryButton>
      </form>
    </div>
  )
}

export default Subscribe
