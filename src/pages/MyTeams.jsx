const MyTeams = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>My Teams</h1>
      <div className='space-y-4'>
        {[
          { teamName: 'Team A', match: 'India vs Australia' },
          { teamName: 'Team B', match: 'England vs South Africa' },
        ].map((team, index) => (
          <div
            key={index}
            className='bg-white rounded-md shadow p-4 flex justify-between items-center'
          >
            <div>
              <p className='text-sm font-semibold'>{team.teamName}</p>
              <p className='text-xs text-gray-500'>Match: {team.match}</p>
            </div>
            <div className='flex gap-2'>
              <button className='bg-primary-500 text-white py-1 px-3 rounded-md font-semibold hover:bg-primary-600'>
                Edit
              </button>
              <button className='bg-primary-500 text-white py-1 px-3 rounded-md font-semibold hover:bg-primary-600'>
                Clone
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTeams
