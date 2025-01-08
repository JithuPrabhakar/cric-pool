import { NavLink } from 'react-router-dom'
// import banner from '../assets/banner.jpg'

const Home = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${banner})` }}
      className='text-white flex flex-col items-stretch px-8 justify-around h-screen'
    >
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          Welcome to Fantasy Sports App
        </h1>
        <p className='text-lg'>Play, Predict, and Win!</p>
      </div>

      <div className='flex gap-4'>
        <NavLink
          to='/signup'
          className='bg-white w-full text-center text-russian-violet-2 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue hover:text-white'
        >
          Sign Up
        </NavLink>
        <NavLink
          to='/login'
          className='bg-white w-full text-center text-russian-violet-2 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue hover:text-white'
        >
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Home
