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

  console.log("Match ID:", matchId)
  console.log("App User ID:", appUserId)

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

  console.log("User Team Data:", userTeam)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading team details.</p>
  if (!userTeam) return <p>No team found for this match.</p>

  return (
    <div className="p-4">
      <h3 className="mb-4 text-lg font-bold">My Squad</h3>
      <ul>
        {userTeam.lstPlayers.map((player) => (
          <li
            key={player.player_id}
            className={`p-3 flex items-center justify-between mb-2 border rounded-lg ${
              player.captain_status === "1"
                ? "bg-green-200"
                : player.vice_captain_status === "1"
                ? "bg-yellow-200"
                : ""
            }`}
          >
            <div>
              <div className="text-sm font-bold">
                {player.player_name}
              </div>
              <div className="text-xs text-gray-500">
                {player.position}
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
