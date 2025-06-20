import { Link, NavLink } from 'react-router'
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <header>
      <nav className='flex items-center justify-between py-5 font-medium select-none'>
        <Link to='/'>
          <img src={assets.logo} alt='Forever' className='w-36' />
        </Link>
        <ul className='link-list'>
          <NavLink to='/'>
            <span>Home</span>
            <hr />
          </NavLink>
          <NavLink to='/collection'>
            <span>Collection</span>
            <hr />
          </NavLink>
          <NavLink to='/about'>
            <span>About</span>
            <hr />
          </NavLink>
          <NavLink to='/contact'>
            <span>Contact</span>
            <hr />
          </NavLink>
          {/* <NavLink
            to='/admin-panel'
            target='_blank'
            rel='noopener noreferrer'
            className='border px-5 text-xs py-1 rounded-full -mt-2 border-gray-200 normal-case hover:bg-gray-100 hover:text-black'
          >
            <span className='mt-1'>Admin Panel</span>
          </NavLink> */}
        </ul>
        <div className='flex items-center gap-6'>
          <img src={assets.search_icon} alt='Search' className='w-5 cursor-pointer' />
          <div
            className='group relative'
            onClick={() => document.querySelector('.dropdown-menu').classList.toggle('hidden')}
          >
            <img src={assets.profile_icon} alt='Profile' className='w-5 cursor-pointer' />
            <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 border border-gray-200 bg-gray-100 rounded-md text-gray-500'>
                <p className='cursor-pointer hover:text-black'>Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <NavLink to='/cart' className='relative'>
            <img src={assets.cart_icon} alt='Cart' className='w-5 min-w-5 cursor-pointer' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 leading-4 bg-black rounded-full aspect-square text-white text-center text-[8px]'>
              0
            </p>
          </NavLink>
          <img
            src={assets.menu_icon}
            alt='More'
            className='w-5 cursor-pointer sm:hidden'
            onClick={() => setVisible(true)}
          />
        </div>
        <div
          className={`absolute sm:hidden top-0 left-0 overflow-hidden transition-all bg-white h-full uppercase ${visible ? 'w-full' : 'w-0'}`}
        >
          <div className='flex flex-col text-gray-600'>
            <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
              <img src={assets.dropdown_icon} alt='Back' className='rotate-180 h-4' />
              <p>Back</p>
            </div>
            <NavLink to='/' className='py-2 pl-6 border' onClick={() => setVisible(false)}>
              Home
            </NavLink>
            <NavLink to='/collection' className='py-2 pl-6 border' onClick={() => setVisible(false)}>
              Collection
            </NavLink>
            <NavLink to='/about' className='py-2 pl-6 border' onClick={() => setVisible(false)}>
              About
            </NavLink>
            <NavLink to='/contact' className='py-2 pl-6 border' onClick={() => setVisible(false)}>
              Contact
            </NavLink>
            {/* <NavLink to='/admin-panel' className='py-2 pl-6 border' onClick={() => setVisible(false)}>
              Admin Panel
            </NavLink> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
