const SelectSquad = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-xl font-bold mb-6'>Select/Edit Squad</h1>
      <div className='grid grid-cols-2 gap-4'>
        {[
          { name: 'Player A', type: 'Batsman' },
          { name: 'Player B', type: 'Bowler' },
          { name: 'Player C', type: 'All-rounder' },
          { name: 'Player D', type: 'Wicketkeeper' },
        ].map((player, index) => (
          <div
            key={index}
            className='bg-white rounded-md shadow p-4 flex justify-between items-center'
          >
            <div>
              <p className='text-sm font-semibold'>{player.name}</p>
              <p className='text-xs text-gray-500'>{player.type}</p>
            </div>
            <button className='bg-primary-500 text-white py-1 px-3 rounded-md hover:bg-primary-600'>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectSquad
