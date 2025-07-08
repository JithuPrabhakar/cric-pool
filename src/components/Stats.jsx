import React from "react"
import { useGetMVPDetailsQuery } from "../features/api/apiSlice"

const Stats = ({ matchId }) => {
  const {
    data: mvpData = [],
    isLoading,
    isError,
    error,
  } = useGetMVPDetailsQuery(matchId)

  if (isLoading)
    return <p className="p-4">Loading Stats...</p>
  if (isError)
    return (
      <p className="p-4 text-red-600">
        Error: {error?.message || "Failed to load stats"}
      </p>
    )

  return (
    <div className="p-4">
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <div className="flex justify-between text-gray-600 font-semibold border-b pb-2">
          <p className="ml-8">Player</p>
          <p>Points</p>
        </div>

        {mvpData.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-md bg-white mb-2 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <img
                src={player.player_image}
                alt={player.playe_name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium">
                  {player.playe_name}
                </p>
                <p className="text-xs text-gray-500 capitalize">
                  {player.team_sname}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">
                {player.total_point}
              </p>
              <p className="text-xs text-gray-500">
                {player.batting_point} bat /
                {player.bowling_point} bowl
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
