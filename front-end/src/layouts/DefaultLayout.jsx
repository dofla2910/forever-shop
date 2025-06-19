import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default DefaultLayout
