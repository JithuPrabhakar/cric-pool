import { NavLink } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>My Profile</h1>
      <div className='bg-white rounded-md shadow p-4 mb-6'>
        <p className='text-sm font-semibold'>Name: John Doe</p>
        <p className='text-sm font-semibold'>Email: johndoe@example.com</p>
        <p className='text-sm font-semibold'>Phone: +91-9876543210</p>
      </div>
      <button className='bg-primary-500 text-white py-2 w-full rounded-md font-semibold hover:bg-primary-600'>
        <NavLink to='/edit-profile'>Edit Profile</NavLink>
      </button>
    </div>
  )
}

export default Profile
