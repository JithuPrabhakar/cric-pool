import { memo } from "react"

const SelectTeam = memo(
  ({
    players,
    selectedPlayers,
    setSelectedPlayers,
    nextStep,
  }) => {
    const togglePlayerSelection = (player) => {
      if (
        selectedPlayers.find(
          (p) => p.player_id === player.player_id
        )
      ) {
        setSelectedPlayers(
          selectedPlayers.filter(
            (p) => p.player_id !== player.player_id
          )
        )
      } else if (selectedPlayers.length < 11) {
        setSelectedPlayers([...selectedPlayers, player])
      }
    }

    return (
      <div className="p-4 mb-12">
        <h3 className="mb-2 text-lg font-bold">
          Select Players
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-center mb-2">
              Team 1
            </h4>
            <ul>
              {players.team1?.map((player) => (
                <li
                  key={player.player_id}
                  onClick={() =>
                    togglePlayerSelection(player)
                  }
                  className={`flex items-center justify-between p-3 mb-2 border rounded-lg ${
                    selectedPlayers.find(
                      (p) =>
                        p.player_id === player.player_id
                    )
                      ? "bg-green-200"
                      : ""
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">
                      {player.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {player.position}
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 rounded-full bg-primary text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlayerSelection(player)
                    }}
                  >
                    {selectedPlayers.find(
                      (p) =>
                        p.player_id === player.player_id
                    )
                      ? "-"
                      : "+"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-center mb-2">
              Team 2
            </h4>
            <ul>
              {players.team2?.map((player) => (
                <li
                  key={player.player_id}
                  onClick={() =>
                    togglePlayerSelection(player)
                  }
                  className={`flex items-center justify-between p-3 mb-2 border rounded-lg ${
                    selectedPlayers.find(
                      (p) =>
                        p.player_id === player.player_id
                    )
                      ? "bg-green-200"
                      : ""
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold">
                      {player.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {player.position}
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 rounded-full bg-primary text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePlayerSelection(player)
                    }}
                  >
                    {selectedPlayers.find(
                      (p) =>
                        p.player_id === player.player_id
                    )
                      ? "-"
                      : "+"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="right-4 left-4 fixed bottom-20 px-3 bg-green-600 text-white py-2 mt-4 rounded disabled:bg-gray-400"
          onClick={nextStep}
          disabled={selectedPlayers.length !== 11}
        >
          Next
        </button>
      </div>
    )
  }
)

export default SelectTeam
