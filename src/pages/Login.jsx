import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-96 mx-auto mt-10'>
      {/* Header Section */}
      <div className='bg-blue-500 text-white flex gap-8 items-center px-6 py-2 rounded-t-md'>
        <button className='border border-1 px-2 py-1 rounded-md text-sm'>
          <NavLink to={'/'}>Go Back</NavLink>
        </button>
        <h2 className='font-semibold text-lg'>LOGIN TO YOUR ACCOUNT</h2>
      </div>

      {/* Form Section */}
      <div className='p-6 bg-white rounded-md shadow-lg w-[22rem] mx-auto'>
        <div className='mb-6'>
          <label
            htmlFor='emailOrPhone'
            className='block text-gray-700 font-medium mb-2'
          >
            Email or Phone
          </label>
          <input
            id='emailOrPhone'
            type='text'
            placeholder='Enter your email or phone'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-medium mb-2'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            placeholder='Enter your password'
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button className='w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600'>
          Login
        </button>

        <p className='text-center text-gray-500 text-sm mt-4'>
          Dont have an account?{' '}
          <NavLink to={'/signup'} className='text-blue-500 cursor-pointer'>
            Sign Up
          </NavLink>
        </p>

        <p className='text-center my-4'>Or login with</p>

        <div className='flex gap-4'>
          <button className='shadow-md py-2 w-full text-blue-600 font-semibold'>
            Facebook
          </button>
          <button className='shadow-md py-2 w-full font-semibold'>
            Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
