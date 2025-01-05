import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-96 mx-auto mt-10'>
      {/* Header Section */}
      <div className='bg-gray-800 text-white text-center py-4 rounded-t-md'>
        <h1 className='text-2xl font-semibold'>Welcome to Our App</h1>
        <p className='mt-2 text-sm'>Sign up or log in to get started!</p>
      </div>

      {/* Navigation Section */}
      <div className='p-6 bg-white rounded-md shadow-lg w-[22rem] mx-auto'>
        <div className='flex flex-col gap-4'>
          <NavLink
            to='/signup'
            className='block text-center bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600'
          >
            Sign Up
          </NavLink>
          <NavLink
            to='/login'
            className='block text-center bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600'
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Footer Section */}
      <div className='bg-gray-800 text-white text-center py-4 rounded-b-md'>
        &copy; 2025
      </div>
    </div>
  )
}

export default Home
