// Demo Data
const leaderboardData = [
  { name: 'NANKAN8 Verma', points: 977.5, rank: 1, prize: '₹15,00,000' },
  { name: 'Sumith 0708', points: 977, rank: 2, prize: '₹3,50,000' },
  { name: 'shivammahisk772', points: 976.5, rank: 3, prize: '₹1,50,000' },
  { name: 'faridnagar56 VL', points: 973.5, rank: 4, prize: '₹21,000' },
  { name: 'Jai Mahadev Jai', points: 973, rank: 5, prize: '₹21,000' },
  { name: 'YOGESH21159OP', points: 972, rank: 6, prize: '₹21,000' },
  { name: 'YAAQOB GENIUS', points: 970, rank: 7, prize: '₹21,000' },
]

// App user details
const appUser = {
  name: 'Top Rockers',
  points: 726.5,
  winnings: '₹39',
  rank: '#4,95,167',
}

const Leaderboard = () => {
  return (
    <div className='p-4 font-sans'>
      {/* Last updated section */}
      <div className='text-center text-gray-500 text-sm mb-4'>
        Points last updated at <span className='font-medium'>41.3 overs</span>
      </div>

      {/* App User Section */}
      <div className='flex justify-between items-center bg-primary-50 p-2'>
        <div>
          <p className='font-medium text-primary-700'>{appUser.name} (T1)</p>
          <p className='text-sm text-gray-600'>You won {appUser.winnings}</p>
        </div>
        <div className='text-right'>
          <p className='font-medium text-black'>{appUser.points}</p>
          <p className='text-gray-500 text-sm'>{appUser.rank}</p>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className='space-y-2'>
        {leaderboardData.map((player, index) => (
          <div key={index} className='flex justify-between items-center p-2'>
            <div>
              <p className='font-medium text-gray-700'>
                {player.name} (T{index + 2})
              </p>
              <p className='text-sm text-green-600'>Won {player.prize}</p>
            </div>
            <div className='text-right'>
              <p className='font-medium text-black'>{player.points}</p>
              <p className='text-gray-500 text-sm'>#{player.rank}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
