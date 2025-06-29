const SelectCaptains = ({
  selectedPlayers,
  captain,
  setCaptain,
  viceCaptain,
  setViceCaptain,
  saveTeam,
}) => {
  const assignCaptain = (player) => setCaptain(player)
  const assignViceCaptain = (player) =>
    setViceCaptain(player)

  return (
    <div className="p-4 mb-12">
      <h3 className="mb-4 text-lg font-bold">
        Select Captain and Vice-Captain
      </h3>
      <ul>
        {selectedPlayers.map((player) => (
          <li
            key={player.player_id}
            className="p-2 border-b flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={player.player_image}
                alt={player.playe_name}
                className="w-10 h-10 object-cover rounded-full border"
              />
              <div>
                <div className="text-sm font-bold">
                  {player.playe_name}
                </div>
                <div className="text-xs text-gray-500">
                  {player.team_name}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className={`rounded-full w-8 h-8 text-white font-bold ${
                  captain?.player_id === player.player_id
                    ? "bg-green-600"
                    : "bg-gray-400"
                }`}
                onClick={() => assignCaptain(player)}
                disabled={
                  viceCaptain?.player_id ===
                  player.player_id
                }
              >
                C
              </button>
              <button
                className={`rounded-full w-8 h-8 text-white font-bold ${
                  viceCaptain?.player_id ===
                  player.player_id
                    ? "bg-blue-600"
                    : "bg-gray-400"
                }`}
                onClick={() => assignViceCaptain(player)}
                disabled={
                  captain?.player_id === player.player_id
                }
              >
                VC
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="fixed bottom-20 left-4 right-4 px-3 bg-green-600 text-white py-2 mt-4 rounded disabled:bg-gray-400"
        onClick={saveTeam}
        disabled={!captain || !viceCaptain}
      >
        Save
      </button>
    </div>
  )
}

export default SelectCaptains
