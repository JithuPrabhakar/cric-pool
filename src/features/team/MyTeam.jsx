import { useEffect, useState } from "react"
import { useGetMyFantasySquadQuery } from "../api/apiSlice"

const MyTeam = ({ matchId }) => {
  const [appUserId, setAppUserId] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { user_id } = JSON.parse(storedUser)
      setAppUserId(user_id)
    }
  }, [])

  const skipQuery = !appUserId || !matchId

  const {
    data: userTeam,
    isLoading,
    isError,
  } = useGetMyFantasySquadQuery(
    {
      id: matchId,
      player_id: appUserId,
    },
    { skip: skipQuery }
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading team details.</p>
  if (!userTeam) return <p>No team found for this match.</p>

  return (
    <div className="p-4">
      <h3 className="mb-4 text-md text-center font-bold">
        Fantasy Squad
      </h3>
      <ul>
        {userTeam.lstPlayers.map((player) => (
          <li
            key={player.player_id}
            className={`p-1 flex items-center justify-between mb-1 rounded-lg ${
              player.captain_status === "1"
                ? "bg-green-200"
                : player.vice_captain_status === "1"
                ? "bg-yellow-200"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={player.player_logo}
                alt={player.player_name}
                className="w-8 h-8 rounded-full object-cover border"
              />
              <div>
                <p className="text-sm font-bold">
                  {player.player_name}
                </p>
                <p className="text-xs text-gray-500">
                  {player.point}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {player.captain_status === "1" && "Captain"}
              {player.vice_captain_status === "1" &&
                "Vice Captain"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyTeam

// import React from "react"

// const MyTeam = () => {
//   return <div>MyTeam</div>
// }

// export default MyTeam
