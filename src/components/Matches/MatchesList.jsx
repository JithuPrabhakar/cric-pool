import { matches } from '../../utils/matches'
import MatchCard from './MatchCard'

const MatchesList = () => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold text-gray-700 mb-4'>
        Upcoming Matches
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}

export default MatchesList
