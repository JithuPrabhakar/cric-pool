import { NavLink } from 'react-router-dom'
import { matches } from '../../data/matches'
import MatchCard from './MatchCard'

const MatchesList = ({ title, link }) => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold text-gray-700 mb-4'>{title}</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {matches.map((match) => (
          <NavLink key={match.id} to={`/match/${link}/${match.id}`}>
            <MatchCard key={match.id} match={match} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default MatchesList
