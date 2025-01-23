const SelectCaptains = ({
  selectedPlayers,
  captain,
  setCaptain,
  viceCaptain,
  setViceCaptain,
  saveTeam,
}) => {
  const assignCaptain = (player) => setCaptain(player)
  const assignViceCaptain = (player) => setViceCaptain(player)

  return (
    <div className='p-4'>
      <h3 className='mb-4 text-lg font-bold'>
        Select Captain and Vice-Captain
      </h3>
      <ul>
        {selectedPlayers.map((player) => (
          <li key={player.id} className='p-2'>
            <div className='flex justify-between'>
              <span>
                {player.name} - {player.position}
              </span>
              <div>
                <button
                  className={`mr-2 rounded-full w-8 h-8 ${
                    captain?.id === player.id ? 'bg-green-200' : 'bg-gray-200'
                  }`}
                  onClick={() => assignCaptain(player)}
                  disabled={viceCaptain?.id === player.id}
                >
                  C
                </button>
                <button
                  className={`rounded-full w-8 h-8 ${
                    viceCaptain?.id === player.id
                      ? 'bg-green-200'
                      : 'bg-gray-200'
                  }`}
                  onClick={() => assignViceCaptain(player)}
                  disabled={captain?.id === player.id}
                >
                  VC
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        className='right-4 left-4 fixed bottom-20 px-3 bg-green-600 text-white py-2 mt-4 rounded disabled:bg-gray-400'
        onClick={saveTeam}
        disabled={!captain || !viceCaptain}
      >
        Save
      </button>
    </div>
  )
}

export default SelectCaptains
