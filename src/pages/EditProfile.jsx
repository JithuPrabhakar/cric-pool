const EditProfile = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-96 bg-white p-6 rounded-md shadow-md'>
        <h2 className='text-xl font-bold text-center mb-6'>Edit Profile</h2>
        <input
          type='text'
          placeholder='Name'
          className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-primary-500'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-primary-500'
        />
        <input
          type='tel'
          placeholder='Phone'
          className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-primary-500'
        />
        <button className='w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600'>
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default EditProfile
