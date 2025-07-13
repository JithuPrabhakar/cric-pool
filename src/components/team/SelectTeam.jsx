import { memo } from "react"
import { skipToken } from "@reduxjs/toolkit/query"
import { useGetSquadListQuery } from "../../features/api/apiSlice"

const SelectTeam = memo(
  ({
    id,
    team1_id,
    team2_id,
    selectedPlayers,
    setSelectedPlayers,
    nextStep,
  }) => {
    const {
      data: team1Squad,
      isLoading: loading1,
      isError: error1,
    } = useGetSquadListQuery(
      team1_id ? { id, teamId: team1_id } : skipToken
    )

    const {
      data: team2Squad,
      isLoading: loading2,
      isError: error2,
    } = useGetSquadListQuery(
      team2_id ? { id, teamId: team2_id } : skipToken
    )

    const togglePlayerSelection = (player) => {
      const isSelected = selectedPlayers.find(
        (p) => p.player_id === player.player_id
      )
      if (isSelected) {
        setSelectedPlayers((prev) =>
          prev.filter(
            (p) => p.player_id !== player.player_id
          )
        )
      } else if (selectedPlayers.length < 11) {
        setSelectedPlayers((prev) => [...prev, player])
      }
    }

    if (loading1 || loading2)
      return <p>Loading squads...</p>
    if (error1 || error2)
      return <p>Error loading squads.</p>
    if (!team1Squad || !team2Squad)
      return <p>No squads found.</p>

    const players = {
      team1: team1Squad,
      team2: team2Squad,
    }

    return (
      <div className="p-4 mb-12">
        <h3 className="text-center text-lg font-bold uppercase px-2 mb-2">
          Select Players
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            { teamKey: "team1", data: team1Squad },
            { teamKey: "team2", data: team2Squad },
          ].map(({ teamKey, data }) => (
            <div key={teamKey}>
              <h4 className="text-[12px] font-bold text-center mb-2">
                {data[0]?.team_name ||
                  `Team ${teamKey === "team1" ? "1" : "2"}`}
              </h4>
              <ul>
                {data?.map((player) => (
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
                    <div className="flex gap-2 items-center">
                      <img
                        src={player.player_image}
                        alt={player.playe_name}
                        className="w-8 h-8 object-cover rounded-full border"
                      />
                      <div>
                        <div className="text-xs">
                          {player.playe_name}
                        </div>
                      </div>
                    </div>
                    <button
                      className="rounded-full text-primary font-bold text-2xl"
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
          ))}
        </div>

        <button
          className="right-4 left-4 fixed bottom-20 px-3 bg-green-600 text-white py-2 mt-4 rounded disabled:bg-gray-400"
          onClick={nextStep}
          disabled={selectedPlayers.length !== 11}
        >
          {selectedPlayers.length === 11
            ? "Next"
            : `${selectedPlayers.length} out of 11 selected`}
        </button>
      </div>
    )
  }
)

export default SelectTeam
