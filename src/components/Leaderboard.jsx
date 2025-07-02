import { useEffect, useState } from "react"
import { useGetWinnerDetailsQuery } from "../features/api/apiSlice"

const Leaderboard = ({ matchId }) => {
  const [appUserId, setAppUserId] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { user_id } = JSON.parse(storedUser)
      setAppUserId(user_id)
    }
  }, [])

  const {
    data: leaderboard = [],
    isLoading,
    isError,
    error,
  } = useGetWinnerDetailsQuery(matchId)

  if (isLoading) {
    return <p className="p-4">Loading leaderboard...</p>
  }

  if (isError) {
    return (
      <p className="p-4 text-red-600">
        Error:{" "}
        {error?.message || "Failed to load leaderboard"}
      </p>
    )
  }

  const appUser = leaderboard.find(
    (user) => user.user_id === appUserId
  )

  const restUsers = leaderboard.filter(
    (user) => user.user_id !== appUserId
  )

  return (
    <div className="p-4 font-sans">
      {/* App User Section */}
      {appUser && (
        <div className="flex justify-between items-center bg-green-100 p-2 rounded-md mb-3">
          <div className="flex items-center space-x-2">
            <img
              src={appUser.user_logo}
              alt={appUser.user_name}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <p className="font-medium text-green-800">
              {appUser.user_name} (T1)
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-black">
              {parseFloat(appUser.total_point).toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Leaderboard List */}
      <div className="space-y-2">
        {restUsers.map((player, index) => (
          <div
            key={player.fantasy_team_id || index}
            className="flex justify-between items-center px-2 py-1 border-b"
          >
            <div className="flex items-center space-x-2">
              <img
                src={player.user_logo}
                alt={player.user_name}
                className="w-10 h-10 rounded-full object-cover border"
              />
              <p className="font-medium text-gray-700">
                {player.user_name || "Unnamed"} (T1)
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-black">
                {parseFloat(player.total_point).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
