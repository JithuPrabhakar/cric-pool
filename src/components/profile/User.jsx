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
      <h3 className="mb-4 text-md text-center font-bold">
        Fantasy Squad of {userTeam.user_name}
      </h3>
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
