const Dashboard = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      {/* Header */}
      <div className='bg-primary-500 text-white p-4 rounded-md mb-6'>
        <h1 className='text-xl font-bold'>Welcome to Fantasy Sports</h1>
        <p className='text-sm'>Create your team and join exciting contests!</p>
      </div>

      {/* Upcoming Matches */}
      <div className='mb-6'>
        <h2 className='text-lg font-semibold mb-2'>Upcoming Matches</h2>
        <div className='bg-white rounded-md shadow p-4'>
          <p className='text-sm font-medium'>India vs Australia</p>
          <p className='text-xs text-gray-500 mb-4'>Starts in 3h 20m</p>
          <button className='w-full bg-primary-500 text-white py-2 rounded-md font-semibold hover:bg-primary-600'>
            Create Team
          </button>
        </div>
      </div>

      {/* Contests */}
      <div>
        <h2 className='text-lg font-semibold mb-2'>Available Contests</h2>
        <div className='bg-white rounded-md shadow p-4'>
          <p className='text-sm font-medium'>Mega Contest</p>
          <p className='text-xs text-gray-500 mb-4'>Prize: ₹10,00,000</p>
          <button className='w-full bg-primary-500 text-white py-2 rounded-md font-semibold hover:bg-primary-600'>
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
