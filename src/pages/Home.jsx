import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>Welcome to Fantasy Sports App</h1>
      <p className='mt-4 text-lg'>Play, Predict, and Win!</p>
      <div className='mt-6 flex gap-4'>
        <NavLink
          to='/signup'
          className='bg-white text-russian-violet-2 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue hover:text-white'
        >
          Sign Up
        </NavLink>
        <NavLink
          to='/login'
          className='bg-white text-russian-violet-2 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-blue hover:text-white'
        >
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Home
