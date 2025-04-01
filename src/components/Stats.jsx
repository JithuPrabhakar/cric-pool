import { useState } from "react"

const Stats = ({ team1, team2 }) => {
  const [activeTeam, setActiveTeam] = useState(
    team1.short_name
  )

  // Merge batting and bowling stats for both teams
  const teams = {
    [team1.short_name]: {
      name: team1.name,
      short_name: team1.short_name,
      players: [
        ...team1.score.batting,
        ...team1.score.bowling,
      ],
    },
    [team2.short_name]: {
      name: team2.name,
      short_name: team2.short_name,
      players: [
        ...team2.score.batting,
        ...team2.score.bowling,
      ],
    },
  }

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

            {/* Team Players - Batting & Bowling */}
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
