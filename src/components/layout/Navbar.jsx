import { Link, useLocation } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { MdOutlineSportsCricket } from 'react-icons/md'
import { BiSolidCricketBall } from 'react-icons/bi'
import { MdOnlinePrediction } from 'react-icons/md'

const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path) => currentPath === path

  return (
    <nav className='fixed bottom-0 left-0 w-full bg-white border-t shadow-xl z-10 flex justify-around items-center px-2 py-4'>
      <Link
        to='/'
        className={`flex flex-col items-center ${
          isActive('/') ? 'text-primary-500' : 'text-gray-400'
        } hover:text-primary-500`}
      >
        <FaHome />
        <p className='text-xs'>Home</p>
      </Link>
      <Link
        to='/my-matches'
        className={`flex flex-col items-center ${
          isActive('/my-matches') ? 'text-primary-500' : 'text-gray-400'
        } hover:text-primary-500`}
      >
        <MdOutlineSportsCricket />
        <p className='text-xs'>My Matches</p>
      </Link>
      <Link
        to='/international-matches'
        className={`flex flex-col items-center ${
          isActive('/international-matches')
            ? 'text-primary-500'
            : 'text-gray-400'
        } hover:text-primary-500`}
      >
        <BiSolidCricketBall />
        <p className='text-xs'>International Matches</p>
      </Link>
      <Link
        to='/predictions'
        className={`flex flex-col items-center ${
          isActive('/predictions') ? 'text-primary-500' : 'text-gray-400'
        } hover:text-primary-500`}
      >
        <MdOnlinePrediction />
        <p className='text-xs'>Predictions</p>
      </Link>
    </nav>
  )
}

export default Navbar
