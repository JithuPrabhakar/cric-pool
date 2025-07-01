import { useState } from "react"
import {
  useGetBattingFigureQuery,
  useGetBowlingFigureQuery,
} from "../features/api/apiSlice"
import {
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io"

const Scorecard = ({ matchId, team1, team2 }) => {
  const [activeInning, setActiveInning] = useState("first")

  const {
    data: team1Batting,
    isLoading: loading1B,
    isError: error1B,
  } = useGetBattingFigureQuery({
    id: matchId,
    teamId: team1,
  })

  const {
    data: team2Bowling,
    isLoading: loading2Bowl,
    isError: error2Bowl,
  } = useGetBowlingFigureQuery({
    id: matchId,
    teamId: team2,
  })

  const {
    data: team2Batting,
    isLoading: loading2B,
    isError: error2B,
  } = useGetBattingFigureQuery({
    id: matchId,
    teamId: team2,
  })

  const {
    data: team1Bowling,
    isLoading: loading1Bowl,
    isError: error1Bowl,
  } = useGetBowlingFigureQuery({
    id: matchId,
    teamId: team1,
  })

  if (
    loading1B ||
    loading2B ||
    loading1Bowl ||
    loading2Bowl
  )
    return (
      <p className="p-4 text-gray-600">
        Loading match stats...
      </p>
    )

  if (error1B || error2B || error1Bowl || error2Bowl)
    return (
      <p className="p-4 text-red-500">
        Error loading match stats.
      </p>
    )

  const getDismissalText = (player) => {
    switch (player.wicket_type) {
      case "Not Out":
        return "Not Out"
      case "Bowled":
        return `b ${player.bowler}`
      case "LBW":
        return `lbw b ${player.bowler}`
      case "Caught":
      case "Catch Out":
        return `c ${player.fielder_name} b ${player.bowler}`
      case "Run Out":
        return `run out (${player.fielder_name})`
      default:
        return player.wicket_type || "Unknown"
    }
  }

  const renderInnings = (
    type,
    batting,
    bowling,
    teamName
  ) => (
    <div className="bg-gray-100 rounded-md overflow-hidden">
      <div
        className="flex justify-between items-center p-3 bg-gray-200 cursor-pointer"
        onClick={() =>
          setActiveInning(
            activeInning === type ? null : type
          )
        }
      >
        <h3 className="font-semibold text-sm capitalize">
          {type === "first"
            ? "First Innings"
            : "Second Innings"}
        </h3>
        <span className="text-gray-600 text-[10px]">
          {activeInning === type ? "▲" : "▼"}
        </span>
      </div>

      {activeInning === type && (
        <div className="p-4 bg-white space-y-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">
              Batting - {teamName}
            </h4>
            {batting.map((player, i) => (
              <div
                key={i}
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
                    <p className="text-sm text-gray-500">
                      {getDismissalText(player)}
                    </p>
                  </div>
                </div>
                <div className="text-right text-sm">
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
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">
              Bowling - {bowling[0]?.team_name || ""}
            </h4>
            {bowling.map((player, i) => (
              <div
                key={i}
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
        </div>
      )}
    </div>
  )

  return (
    <div className="space-y-6 p-4">
      {renderInnings(
        "first",
        team1Batting,
        team2Bowling,
        team1Bowling[0]?.team_name
      )}
      {renderInnings(
        "second",
        team2Batting,
        team1Bowling,
        team2Bowling[0]?.team_name
      )}
    </div>
  )
}

export default Scorecard
