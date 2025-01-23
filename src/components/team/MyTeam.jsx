import { NavLink } from 'react-router-dom'

const MyTeam = ({ selectedPlayers, captain, viceCaptain }) => {
  return (
    <div className='p-4'>
      <h3 className='mb-4 text-lg font-bold'>My Team</h3>
      <ul>
        <div className='pl-4 flex items-center justify-between'>
          <p>Player</p>
          <div className='flex gap-4'>
            <p className='w-12'>Points</p>
            <p className='w-12'>Credits</p>
          </div>
        </div>
        {selectedPlayers.map((player) => (
          <li
            key={player.id}
            className={`p-3 flex items-center justify-between mb-2 border rounded-lg ${
              captain?.id === player.id
                ? 'bg-green-200'
                : viceCaptain?.id === player.id
                ? 'bg-yellow-200'
                : ''
            }`}
          >
            <div>
              <div className='text-sm font-bold'>{player.name}</div>
              <div className='text-xs text-gray-500'>{player.position}</div>
            </div>
            <div className='flex gap-4'>
              {captain?.id === player.id && 'Captain'}
              {viceCaptain?.id === player.id && 'Vice Captain'}
            </div>
            <div className='text-right flex gap-4 items-center'>
              <div className='text-sm font-semibold w-12'>{player.points}</div>
              <div className='text-sm w-12'>{player.credits}</div>
            </div>
          </li>
        ))}
      </ul>
      <NavLink to={'/'}>
        <button className='right-4 left-4 fixed bottom-20 px-3 bg-green-600 text-white py-2 mt-4 rounded'>
          Go Back
        </button>
      </NavLink>
    </div>
  )
}

export default MyTeam
