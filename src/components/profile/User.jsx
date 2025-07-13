import { Link, useParams } from "react-router-dom"
import { useGetFantasyTeamPlayersQuery } from "../../features/api/apiSlice"

const User = () => {
  const { id } = useParams()
  const {
    data: userTeam,
    isLoading,
    isError,
  } = useGetFantasyTeamPlayersQuery({ team_id: id })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading team details.</p>

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-4 p-4 rounded-md bg-primary text-white shadow">
        <img
          src={userTeam.user_logo}
          alt={userTeam.user_name}
          className="w-12 h-12 rounded-full object-cover border border-white"
        />
        <div>
          <h2 className="text-lg font-bold">
            {userTeam.user_name}
          </h2>
          <p className="text-sm">
            Total Points: {userTeam.total_point}
          </p>
        </div>
      </div>
      <div
        to={`/player-points/${userTeam.matchId}/${userTeam.playerId}`}
      >
        {userTeam.lstPlayers.map((player) => (
          <Link
            to={`/player-points/${userTeam.game_det_id}/${player.player_id}`}
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
                  {player.player_name}{" "}
                  {player.captain_status === "1" && "(C)"}
                  {player.vice_captain_status === "1" &&
                    "(VC)"}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-xs text-gray-500">
                {player.point}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default User
