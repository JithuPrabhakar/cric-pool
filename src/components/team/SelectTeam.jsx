const SelectTeam = ({
  players,
  selectedPlayers,
  setSelectedPlayers,
  nextStep,
}) => {
  const togglePlayerSelection = (player) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id))
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, player])
    }
  }

  return (
    <div className='p-4'>
      <h3 className='mb-4 text-lg font-bold'>Select Players (11 max)</h3>
      <ul>
        <div className='pl-4 flex items-center justify-between'>
          <p>Player</p>
          <div className='flex gap-4 mr-12'>
            <p className='w-12'>Points</p>
            <p className='w-12'>Credits</p>
          </div>
        </div>
        {players.map((player) => (
          <li
            key={player.id}
            onClick={() => togglePlayerSelection(player)}
            className={`flex items-center justify-between p-3 mb-2 border rounded-lg ${
              selectedPlayers.find((p) => p.id === player.id)
                ? 'bg-green-200'
                : ''
            }`}
          >
            <div>
              <div className='text-sm font-bold'>{player.name}</div>
              <div className='text-xs text-gray-500'>{player.position}</div>
            </div>
            <div className='text-right flex gap-4 items-center'>
              <div className='text-sm font-semibold w-12'>{player.points}</div>
              <div className='text-sm w-12'>{player.credits}</div>
              <button
                className='h-8 w-8 rounded-full bg-primary-600 text-white'
                onClick={() => togglePlayerSelection(player)}
              >
                {selectedPlayers.find((p) => p.id === player.id) ? '-' : '+'}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className='right-4 left-4 fixed bottom-20 px-3 bg-green-600 text-white py-2 mt-4 rounded disabled:bg-gray-400'
        onClick={nextStep}
        disabled={selectedPlayers.length !== 11}
      >
        Next
      </button>
    </div>
  )
}

export default SelectTeam
