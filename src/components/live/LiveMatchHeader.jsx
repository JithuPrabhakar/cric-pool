import { FaArrowLeft } from 'react-icons/fa'
import { MdHelpOutline } from 'react-icons/md'

const LiveMatchHeader = ({ match, onBack }) => {
  if (!match || !match.teams || !match.teams.team1 || !match.teams.team2) {
    return (
      <div className='text-center text-red-500 mt-10'>Invalid match data</div>
    )
  }

  return (
    <header className='bg-primary-800 text-white p-4 rounded-t-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-3'>
          <button onClick={onBack} className='text-white text-lg'>
            <FaArrowLeft />
          </button>
          <h1 className='text-lg font-semibold'>
            {match.teams.team1.name} vs {match.teams.team2.name}
          </h1>
        </div>
        <button className='text-white text-lg'>
          <MdHelpOutline />
        </button>
      </div>

      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          {/* Team 1 Details */}
          <div className='text-center'>
            <img
              src={match.teams.team1.logo}
              alt={`${match.teams.team1.name} Logo`}
              className='w-10 h-10 mx-auto mb-2'
            />
            <p className='text-sm'>{match.teams.team1.name}</p>
            <p className='text-2xl font-bold'>
              {match.scores.team1.runs + '/' + match.scores.team1.wickets}{' '}
              <span className='text-sm'>({match.scores.team1.overs})</span>
            </p>
          </div>

          {/* Match Status and Result */}
          <div className='text-center'>
            <p className='text-sm font-medium'>
              <span className='text-green-500 font-medium'>●</span>{' '}
              {match.status}
            </p>
            <p className='text-sm'>{match.result}</p>
          </div>

          {/* Team 2 Details */}
          <div className='text-center'>
            <img
              src={match.teams.team2.logo}
              alt={`${match.teams.team2.name} Logo`}
              className='w-10 h-10 mx-auto mb-2'
            />
            <p className='text-sm'>{match.teams.team2.name}</p>
            <p className='text-2xl font-bold'>
              {match.scores.team2.runs + '/' + match.scores.team2.wickets}{' '}
              <span className='text-sm'>({match.scores.team2.overs})</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LiveMatchHeader
