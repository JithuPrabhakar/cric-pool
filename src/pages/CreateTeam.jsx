const CreateTeam = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>Create Your Team</h1>

      {/* Player Categories */}
      <div className='grid grid-cols-2 gap-4'>
        {['Batsmen', 'Bowlers', 'All-rounders', 'Wicketkeepers'].map(
          (category) => (
            <div key={category} className='bg-white rounded-md shadow p-4'>
              <p className='text-sm font-semibold'>{category}</p>
              <button className='mt-4 w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600'>
                Select Players
              </button>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default CreateTeam
