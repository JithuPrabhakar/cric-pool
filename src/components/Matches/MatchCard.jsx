const MatchCard = ({ match }) => {
  const {
    league,
    teams,
    matchTime,
    timer,
    location,
    prize,
    topPlayers,
    status,
  } = match

  return (
    <div className='bg-white shadow-md rounded-md p-4 flex flex-col gap-2'>
      {/* League Name */}
      <div className='flex justify-between items-center'>
        <h3 className='text-sm font-semibold text-gray-700'>{league}</h3>
        {status === 'lineups-out' && (
          <span className='text-green-500 text-xs font-semibold'>
            Lineups Out
          </span>
        )}
      </div>

      {/* Teams */}
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center'>
          <img
            src={teams.team1.logo}
            alt={teams.team1.name}
            className='w-12 h-12 object-contain'
          />
          <span className='text-sm font-medium'>{teams.team1.name}</span>
        </div>
        <div className='text-center'>
          <span className='text-red-500 font-bold text-sm'>{timer}</span>
          <div className='text-xs text-gray-500'>{matchTime}</div>
        </div>
        <div className='flex flex-col items-center'>
          <img
            src={teams.team2.logo}
            alt={teams.team2.name}
            className='w-12 h-12 object-contain'
          />
          <span className='text-sm font-medium'>{teams.team2.name}</span>
        </div>
      </div>

      {/* Location */}
      <div className='flex justify-between text-gray-600 text-xs'>
        <span>{location.team1}</span>
        <span>{location.team2}</span>
      </div>

      {/* Prize & Players */}
      <div className='flex justify-between items-center'>
        <div className='text-yellow-500 text-sm font-semibold'>{prize}</div>
        {topPlayers.length > 0 && (
          <div className='text-blue-500 text-xs flex gap-1 items-center'>
            {topPlayers.join(', ')}
          </div>
        )}
      </div>
    </div>
  )
}

export default MatchCard
