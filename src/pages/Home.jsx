import { NavLink } from 'react-router-dom'
import { IoPersonCircle } from 'react-icons/io5'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaWallet } from 'react-icons/fa'
import MatchesList from '../components/Matches/MatchesList'

const Home = () => {
  return (
    <div>
      <header className='flex justify-between items-center py-4 px-12 text-white'>
        <div className='flex gap-8 items-center'>
          <NavLink to='/profile'>
            <IoPersonCircle className='text-5xl' />
          </NavLink>
          <p className='text-2xl font-bold'>Logo</p>
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
      <section className='w-full bg-white text-black rounded-lg'>
        <MatchesList />
      </section>
    </div>
  )
}

export default Home
