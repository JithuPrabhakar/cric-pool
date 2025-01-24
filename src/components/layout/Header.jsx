import { NavLink } from 'react-router-dom'
import { IoPersonCircle } from 'react-icons/io5'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaWallet } from 'react-icons/fa'

import background from '../../assets/background.jpg'

const Header = () => {
  return (
    <header
      className='fixed top-0 left-0 w-full text-white p-4 shadow-md z-10 flex items-center justify-between'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='flex gap-8 items-center'>
        <NavLink to='/profile'>
          <IoPersonCircle className='text-5xl' />
        </NavLink>
        <p className='text-2xl font-bold'>Cric War</p>
      </div>
      <div className='flex gap-6'>
        <NavLink to='/notification'>
          <IoNotificationsSharp className='text-xl' />
        </NavLink>
        <NavLink to='/wallet'>
          <FaWallet className='text-xl' />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
