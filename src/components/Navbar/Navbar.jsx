import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-primary-500 text-white py-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center px-6'>
        <h1 className='text-lg font-semibold'>Fantasy Sports App</h1>
        <div className='flex gap-4'>
          {/* Add NavLinks for each route */}
          <NavLink
            to='/'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Home
          </NavLink>
          <NavLink
            to='/dashboard'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Dashboard
          </NavLink>
          <NavLink
            to='/leaderboard'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Leaderboard
          </NavLink>
          <NavLink
            to='/create-team'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Create Team
          </NavLink>
          <NavLink
            to='/signup'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Sign Up
          </NavLink>
          <NavLink
            to='/login'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Login
          </NavLink>
          <NavLink
            to='/forgot-password'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Forgot Password
          </NavLink>
          <NavLink
            to='/edit-profile'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Edit Profile
          </NavLink>
          <NavLink
            to='/commentary'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Commentary
          </NavLink>
          <NavLink
            to='/scorecard'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Scorecard
          </NavLink>
          <NavLink
            to='/select-squad'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Select Squad
          </NavLink>
          <NavLink
            to='/winning-cash-details'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Winning Cash
          </NavLink>
          <NavLink
            to='/stats'
            className='hover:underline'
            activeClassName='font-bold underline'
          >
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
