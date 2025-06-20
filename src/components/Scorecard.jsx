import { useState } from "react"
import {
  useGetBattingFigureQuery,
  useGetBowlingFigureQuery,
} from "../features/api/apiSlice"

const Scorecard = ({ matchId, team1, team2 }) => {
  const [active, setActive] = useState(false)
  // Batting + Bowling for team1
  const {
    data: team1Batting,
    isLoading: isLoadingTeam1Batting,
    isError: isErrorTeam1Batting,
  } = useGetBattingFigureQuery({
    id: matchId,
    teamId: team1,
  })

  const {
    data: team1Bowling,
    isLoading: isLoadingTeam1Bowling,
    isError: isErrorTeam1Bowling,
  } = useGetBowlingFigureQuery({
    id: matchId,
    teamId: team1,
  })

  // Batting + Bowling for team2
  const {
    data: team2Batting,
    isLoading: isLoadingTeam2Batting,
    isError: isErrorTeam2Batting,
  } = useGetBattingFigureQuery({
    id: matchId,
    teamId: team2,
  })

  const {
    data: team2Bowling,
    isLoading: isLoadingTeam2Bowling,
    isError: isErrorTeam2Bowling,
  } = useGetBowlingFigureQuery({
    id: matchId,
    teamId: team2,
  })

  if (
    isLoadingTeam1Batting ||
    isLoadingTeam1Bowling ||
    isLoadingTeam2Batting ||
    isLoadingTeam2Bowling
  ) {
    return <div>Loading match stats...</div>
  }

  if (
    isErrorTeam1Batting ||
    isErrorTeam1Bowling ||
    isErrorTeam2Batting ||
    isErrorTeam2Bowling
  ) {
    return <div>Error fetching match stats.</div>
  }

  const getDismissalText = (player) => {
    if (player.wicket_type === "Not Out") return "Not Out"
    if (player.wicket_type === "Bowled")
      return `b ${player.bowler}`
    if (player.wicket_type === "LBW")
      return `lbw b ${player.bowler}`
    if (
      player.wicket_type === "Caught" ||
      player.wicket_type === "Catch Out"
    )
      return `c ${player.fielder_name} b ${player.bowler}`
    if (player.wicket_type === "Run Out")
      return `run out (${player.fielder_name})`

    return player.wicket_type || "Unknown"
  }

  return (
    <div className="p-4 space-y-4 font-sans">
      <p
        onClick={() => setActive(true)}
        className="font-semibold text-gray-400 mb-2"
      >
        First Innings
      </p>
      <p className="font-semibold text-gray-700 mb-2">
        Batting - {team1Batting[0].team_name}
      </p>
      {active && (
        <div>
          {team1Batting.map((player, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b"
            >
              <div className="flex items-center gap-2">
                <img
                  src={player.batsman_logo}
                  alt={player.batsman}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">
                    {player.batsman}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {getDismissalText(player)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {player.runs} ({player.balls})
                </p>
                <p className="text-xs text-gray-500">
                  SR: {player.strikerate}
                </p>
                <p className="text-xs text-gray-400">
                  4s: {player.four} • 6s: {player.six}
                </p>
              </div>
            </div>
          ))}
          <p className="font-semibold text-gray-700 mb-2">
            Bowling - {team1Bowling[0].team_name}
          </p>
          {team2Bowling.map((player, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-b gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={player.bowler_logo}
                  alt={player.bowler}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <p className="font-medium">
                    {player.bowler}
                  </p>
                  <p className="text-sm text-gray-500">
                    Overs: {player.over} • Runs:{" "}
                    {player.runs} • Wkts: {player.wicket}
                  </p>
                  <p className="text-sm text-gray-400">
                    Econ: {player.runrate} • Dot Balls:{" "}
                    {player.dotball}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p
        onClick={() => setActive(false)}
        className="font-semibold text-gray-400 mb-2"
      >
        Second Innings
      </p>
      <p className="font-semibold text-gray-700 mb-2">
        Batting - {team2Batting[0].team_name}
      </p>
      {!active && (
        <div className="active">
          {team2Batting.map((player, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border-b"
            >
              <div className="flex items-center gap-2">
                <img
                  src={player.batsman_logo}
                  alt={player.batsman}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">
                    {player.batsman}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {getDismissalText(player)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  {player.runs} ({player.balls})
                </p>
                <p className="text-xs text-gray-500">
                  SR: {player.strikerate}
                </p>
                <p className="text-xs text-gray-400">
                  4s: {player.four} • 6s: {player.six}
                </p>
              </div>
            </div>
          ))}
          <p className="font-semibold text-gray-700 mb-2">
            Bowling - {team2Bowling[0].team_name}
          </p>
          {team1Bowling.map((player, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border-b gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={player.bowler_logo}
                  alt={player.bowler}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <p className="font-medium">
                    {player.bowler}
                  </p>
                  <p className="text-sm text-gray-500">
                    Overs: {player.over} • Runs:{" "}
                    {player.runs} • Wkts: {player.wicket}
                  </p>
                  <p className="text-sm text-gray-400">
                    Econ: {player.runrate} • Dot Balls:{" "}
                    {player.dotball}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Scorecard
