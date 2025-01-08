import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-primary-500 text-white shadow-md'>
      <div className='flex justify-between items-center px-6 py-4'>
        <h1 className='text-lg font-semibold'>Fantasy Sports App</h1>
        <button
          onClick={toggleMenu}
          className='block md:hidden text-white text-2xl focus:outline-none'
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-6 absolute md:static bg-primary-500 top-full left-0 w-full md:w-auto md:bg-transparent z-50`}
        >
          <NavLink
            to='/'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Home
          </NavLink>
          <NavLink
            to='/dashboard'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/leaderboard'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Leaderboard
          </NavLink>
          <NavLink
            to='/create-team'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Create Team
          </NavLink>
          <NavLink
            to='/signup'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Sign Up
          </NavLink>
          <NavLink
            to='/login'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Login
          </NavLink>
          <NavLink
            to='/commentary'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Commentary
          </NavLink>
          <NavLink
            to='/scorecard'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Scorecard
          </NavLink>
          <NavLink
            to='/select-squad'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Select Squad
          </NavLink>
          <NavLink
            to='/winning-cash-details'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Winning Cash
          </NavLink>
          <NavLink
            to='/stats'
            className='block px-6 py-2 hover:bg-primary-700 md:hover:bg-transparent md:hover:underline'
          >
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
