const MyTeam = ({ selectedPlayers, captain, viceCaptain }) => {
  return (
    <div className='p-4'>
      <h3 className='mb-4 text-lg font-bold'>My Team</h3>
      <ul>
        {selectedPlayers.map((player) => (
          <li
            key={player.id}
            className={`p-2 ${
              captain?.id === player.id
                ? 'bg-green-200'
                : viceCaptain?.id === player.id
                ? 'bg-yellow-200'
                : ''
            }`}
          >
            {player.name} - {player.position}{' '}
            {captain?.id === player.id && '(C)'}
            {viceCaptain?.id === player.id && '(VC)'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyTeam
