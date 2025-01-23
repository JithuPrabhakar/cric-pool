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
        {players.map((player) => (
          <li
            key={player.id}
            onClick={() => togglePlayerSelection(player)}
            className={`p-2 cursor-pointer ${
              selectedPlayers.find((p) => p.id === player.id)
                ? 'bg-green-200'
                : ''
            }`}
          >
            {player.name} - {player.position} - {player.points} pts -{' '}
            {player.credits} cr
          </li>
        ))}
      </ul>
      <button
        className='w-full bg-primary-600 text-white py-2 mt-4 rounded disabled:bg-gray-400'
        onClick={nextStep}
        disabled={selectedPlayers.length !== 11}
      >
        Next
      </button>
    </div>
  )
}

export default SelectTeam
