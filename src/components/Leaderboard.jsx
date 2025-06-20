import { useGetWinnerDetailsQuery } from "../features/api/apiSlice"

const Leaderboard = ({ matchId }) => {
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

  const appUserId = "25648" // <- replace with dynamic ID if needed
  const appUser = leaderboard.find(
    (user) => user.user_id === appUserId
  )

  const restUsers = leaderboard.filter(
    (user) => user.user_id !== appUserId
  )

  return (
    <div className="p-4 font-sans">
      {/* Last updated info (can be dynamic later) */}
      <div className="text-center text-gray-500 text-sm mb-4">
        Points last updated at{" "}
        <span className="font-medium">41.3 overs</span>
      </div>

      {/* App User Section */}
      {appUser && (
        <div className="flex justify-between items-center bg-green-100 p-2 rounded-md mb-3">
          <div>
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
            className="flex justify-between items-center p-2 border-b"
          >
            <div>
              <p className="font-medium text-gray-700">
                {player.user_name || "Unnamed"} (T
                {index + 2})
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
