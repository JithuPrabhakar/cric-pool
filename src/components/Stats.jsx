import React, { useState } from "react"
import { useGetMVPDetailsQuery } from "../features/api/apiSlice"

const Stats = ({ matchId }) => {
  const {
    data: mvpData = [],
    isLoading,
    isError,
    error,
  } = useGetMVPDetailsQuery(matchId)

  const [activeTeam, setActiveTeam] = useState(null)

  if (isLoading)
    return <p className="p-4">Loading Statss...</p>
  if (isError)
    return (
      <p className="p-4 text-red-600">
        Error: {error?.message || "Failed to load stats"}
      </p>
    )

  // Group players by team
  const teams = mvpData.reduce((acc, player) => {
    const key = player.team_name || "Unknown Team"
    if (!acc[key]) {
      acc[key] = {
        name: player.team_name,
        short_name: player.team_sname,
        players: [],
      }
    }

    acc[key].players.push({
      name: player.playe_name,
      img: player.player_image,
      points: parseFloat(player.total_point).toFixed(2),
      percentage: `${player.batting_point} bat / ${player.bowling_point} bowl`,
      position:
        player.wicket !== "--" && player.ball_run !== "--"
          ? "All-Rounder"
          : player.bat_run !== "0"
          ? "Batsman"
          : "Bowler",
      isSelected: false, // Optional: if using selection later
    })

    return acc
  }, {})

  return (
    <div className="p-4">
      {Object.keys(teams).map((teamKey) => {
        const team = teams[teamKey]
        const isActive = activeTeam === teamKey

        return (
          <div key={teamKey} className="mb-4">
            {/* Team Header - Click to Expand */}
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-200 p-4 rounded-md"
              onClick={() =>
                setActiveTeam(isActive ? null : teamKey)
              }
            >
              <h2 className="text-lg font-bold">
                {team.name}
              </h2>
              <span className="text-gray-600">
                {isActive ? "▲" : "▼"}
              </span>
            </div>

            {/* Team Players - MVP Breakdown */}
            {isActive && (
              <div className="bg-white p-4 rounded-md shadow mt-2">
                <div className="flex justify-between text-gray-600 font-semibold border-b pb-2">
                  <p className="ml-8">Player</p>
                  <p>Points</p>
                </div>

                {team.players.map((player, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-2 rounded-md ${
                      player.isSelected
                        ? "bg-primary-50"
                        : "bg-white"
                    } mb-2 shadow-sm`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={player.img}
                        alt={player.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          {player.name}
                        </p>
                        <p className="text-xs text-gray-500 capitalize">
                          {team.short_name} -{" "}
                          {player.position}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">
                        {player.points}
                      </p>
                      <p className="text-xs text-gray-500">
                        {player.percentage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Stats
