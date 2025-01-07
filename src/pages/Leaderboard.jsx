const Leaderboard = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>Leaderboard</h1>
      <div className='bg-white rounded-md shadow p-4'>
        {[
          { rank: 1, name: 'Player1', points: 120 },
          { rank: 2, name: 'Player2', points: 110 },
          { rank: 3, name: 'Player3', points: 105 },
        ].map((entry) => (
          <div
            key={entry.rank}
            className='flex justify-between items-center py-2 border-b last:border-none'
          >
            <p>{`Rank ${entry.rank}: ${entry.name}`}</p>
            <p>{entry.points} Points</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
