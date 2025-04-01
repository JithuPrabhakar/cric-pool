import { useState } from "react"

const Scorecard = ({ matchData }) => {
  const team1 = {
    name: matchData.team1_name,
    short_name: "T1",
    score: {
      runs: matchData.team1_score,
      wickets: matchData.team1_wicket,
      overs: matchData.team1_over,
      batting: [
        {
          name: matchData.batsman_name1.split(" ")[0],
          runs: matchData.batsman_name1
            .split(" ")[1]
            .replace("(", "")
            .replace(")", ""),
          balls: matchData.batsman_name1
            .split("(")[1]
            ?.split(")")[0],
        },
        {
          name: matchData.batsman_name2.split(" ")[0],
          runs: matchData.batsman_name2
            .split(" ")[1]
            .replace("(", "")
            .replace(")", ""),
          balls: matchData.batsman_name2
            .split("(")[1]
            ?.split(")")[0],
        },
      ],
      bowling: [
        {
          name: matchData.bowler_name1.split(" ")[0],
          runs: matchData.bowler_name1.split("/")[0],
          wickets: matchData.bowler_name1.split("/")[1],
        },
        {
          name: matchData.bowler_name2.split(" ")[0],
          runs: matchData.bowler_name2.split("/")[0],
          wickets: matchData.bowler_name2.split("/")[1],
        },
      ],
      extras:
        parseInt(matchData.wd1) +
        parseInt(matchData.nb1) +
        parseInt(matchData.legby1) +
        parseInt(matchData.by1),
      fall_of_wickets: matchData.fall_of_wk1
        .split(", ")
        .filter(Boolean),
    },
  }

  const team2 = {
    name: matchData.team2_name,
    short_name: "T2",
    score: {
      runs: matchData.team2_score,
      wickets: matchData.team2_wicket,
      overs: matchData.team2_over,
      batting: [],
      bowling: [],
      extras:
        parseInt(matchData.wd2) +
        parseInt(matchData.nb2) +
        parseInt(matchData.legby2) +
        parseInt(matchData.by2),
      fall_of_wickets: matchData.fall_of_wk2
        .split(", ")
        .filter(Boolean),
    },
  }

  const [activeTeam, setActiveTeam] = useState(
    team1.short_name
  )

  const teams = {
    [team1.short_name]: team1,
    [team2.short_name]: team2,
  }

  return (
    <div className="p-4 space-y-4 font-sans">
      {Object.keys(teams).map((teamKey) => {
        const team = teams[teamKey]
        const isActive = activeTeam === teamKey

        return (
          <div key={teamKey}>
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-md"
              onClick={() =>
                setActiveTeam(isActive ? null : teamKey)
              }
            >
              <p className="font-medium text-lg">
                {team.name}
              </p>
              <p className="text-gray-600">
                {team.score.runs}/{team.score.wickets} (
                {team.score.overs})
              </p>
            </div>
            {isActive && (
              <div className="mt-2 space-y-4">
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    Batting
                  </p>
                  {team.score.batting.map(
                    (player, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 border-b"
                      >
                        <div>
                          <p className="font-medium">
                            {player.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {player.runs} ({player.balls})
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">Extras</p>
                  <p className="text-gray-700">
                    {team.score.extras}
                  </p>
                </div>
                <div className="flex justify-between items-center font-medium">
                  <p>Total</p>
                  <p>
                    {team.score.runs}/{team.score.wickets} (
                    {team.score.overs})
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-2">
                    Fall of Wickets
                  </p>
                  {team.score.fall_of_wickets.map(
                    (wicket, index) => (
                      <div key={index} className="text-sm">
                        {wicket}
                      </div>
                    )
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    Bowling
                  </p>
                  {team.score.bowling.map(
                    (player, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 border-b"
                      >
                        <div>
                          <p className="font-medium">
                            {player.name}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {player.runs} Runs •{" "}
                            {player.wickets} Wickets
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Scorecard
