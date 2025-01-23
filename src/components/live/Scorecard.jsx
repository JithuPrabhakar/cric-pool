import { useState } from 'react'

// Demo Data
const teams = {
  KKR: {
    score: '261/6',
    players: [
      {
        name: 'Phill Salt (wk)',
        runs: 75,
        balls: 37,
        fours: 6,
        sixes: 4,
        sr: 202.7,
        highlighted: true,
      },
      {
        name: 'Sunil Narine',
        runs: 71,
        balls: 32,
        fours: 4,
        sixes: 4,
        sr: 221.88,
        highlighted: true,
      },
      {
        name: 'Venkatesh Iyer',
        runs: 29,
        balls: 73,
        fours: 3,
        sixes: 2,
        sr: 160.57,
      },
      {
        name: 'Andre Russell',
        runs: 24,
        balls: 12,
        fours: 1,
        sixes: 2,
        sr: 200,
        highlighted: true,
      },
      {
        name: 'Shreyas Iyer',
        runs: 28,
        balls: 10,
        fours: 1,
        sixes: 3,
        sr: 280,
      },
      { name: 'Rinku Singh', runs: 5, balls: 4, fours: 0, sixes: 1, sr: 125 },
      {
        name: 'Ramandeep Singh',
        runs: 6,
        balls: 3,
        fours: 0,
        sixes: 1,
        sr: 200,
      },
    ],
    extras: 13,
    total: 261,
    fallOfWickets: [
      { player: 'Sunil Narine', score: '138/1', over: '10.2' },
      { player: 'Phill Salt', score: '163/2', over: '12.3' },
      { player: 'Andre Russell', score: '203/3', over: '15.3' },
    ],
  },
  PBKS: {
    score: '262/2',
    players: [
      {
        name: 'Shikhar Dhawan (c)',
        runs: 96,
        balls: 55,
        fours: 10,
        sixes: 3,
        sr: 174.55,
        highlighted: true,
      },
      {
        name: 'Liam Livingstone',
        runs: 80,
        balls: 35,
        fours: 7,
        sixes: 4,
        sr: 228.57,
      },
      {
        name: 'Jitesh Sharma',
        runs: 40,
        balls: 22,
        fours: 3,
        sixes: 2,
        sr: 181.81,
      },
      {
        name: 'Shahrukh Khan',
        runs: 15,
        balls: 7,
        fours: 0,
        sixes: 1,
        sr: 214.28,
        highlighted: true,
      },
    ],
    extras: 14,
    total: 262,
    fallOfWickets: [
      { player: 'Shikhar Dhawan', score: '150/1', over: '13.1' },
      { player: 'Liam Livingstone', score: '220/2', over: '17.4' },
    ],
  },
}

const Scorecard = () => {
  const [activeTeam, setActiveTeam] = useState('KKR')

  return (
    <div className='p-4 space-y-4 font-sans'>
      {Object.keys(teams).map((teamKey) => {
        const team = teams[teamKey]
        const isActive = activeTeam === teamKey

        return (
          <div key={teamKey}>
            {/* Team Header */}
            <div
              className='flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-md'
              onClick={() => setActiveTeam(isActive ? null : teamKey)}
            >
              <p className='font-medium text-lg'>{teamKey}</p>
              <p className='text-gray-600'>{team.score}</p>
            </div>

            {/* Team Details */}
            {isActive && (
              <div className='mt-2 space-y-4'>
                {/* Batting Section */}
                <div>
                  {team.players.map((player, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-2 ${
                        player.highlighted ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div>
                        <p className='font-medium'>{player.name}</p>
                        <p className='text-gray-500 text-sm'>
                          {player.runs} ({player.balls}) • {player.fours}x4{' '}
                          {player.sixes}x6 • SR: {player.sr}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Extras */}
                <div className='flex justify-between items-center'>
                  <p className='text-gray-600'>Extras</p>
                  <p className='text-gray-700'>{team.extras}</p>
                </div>

                {/* Total */}
                <div className='flex justify-between items-center font-medium'>
                  <p>Total</p>
                  <p>{team.total}</p>
                </div>

                {/* Fall of Wickets */}
                <div>
                  <p className='font-medium text-gray-700 mb-2'>
                    Fall of Wickets
                  </p>
                  {team.fallOfWickets.map((wicket, index) => (
                    <div
                      key={index}
                      className='flex justify-between items-center text-sm'
                    >
                      <p>{wicket.player}</p>
                      <p>
                        {wicket.score} ({wicket.over})
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Scorecard
