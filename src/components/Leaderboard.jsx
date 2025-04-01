const Leaderboard = ({ leaderboard }) => {
  const appUser = leaderboard.find(
    (user) => user.user_id === 1
  )

  const restusers = leaderboard.filter(
    (user) => user.user_id !== 1
  )

  return (
    <div className="p-4 font-sans">
      {/* Last updated section */}
      <div className="text-center text-gray-500 text-sm mb-4">
        Points last updated at{" "}
        <span className="font-medium">41.3 overs</span>
      </div>

      {/* App User Section */}
      <div className="flex justify-between items-center bg-green-100 p-2">
        <div>
          <p className="font-medium text-primary-700">
            {appUser.name} (T1)
          </p>
          <p className="text-sm text-gray-600">
            You won {appUser.prize}
          </p>
        </div>
        <div className="text-right">
          <p className="font-medium text-black">
            {appUser.points}
          </p>
          <p className="text-gray-500 text-sm">
            {appUser.rank}
          </p>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2">
        {restusers.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2"
          >
            <div>
              <p className="font-medium text-gray-700">
                {player.name} (T{index + 2})
              </p>
              <p className="text-sm text-green-600">
                Won {player.prize}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium text-black">
                {player.points}
              </p>
              <p className="text-gray-500 text-sm">
                #{player.rank}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
