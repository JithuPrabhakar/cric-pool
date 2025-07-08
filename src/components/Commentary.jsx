import React, { useState } from "react"
import { useGetBallByBallDetailsQuery } from "../features/api/apiSlice"

const CommentaryItem = ({ item }) => {
  const getBallStyle = () => {
    if (item.wicket_status === "True")
      return "bg-red-500 text-white"
    if (
      item.ball_type === "Wide" ||
      item.ball_type === "Noball"
    )
      return "bg-black text-white"
    if (parseInt(item.run) >= 4)
      return "bg-green-500 text-white"
    return "bg-white text-black border border-gray-200"
  }

  return (
    <div className="flex gap-2 border-b border-gray-200 p-3">
      <div className="flex-shrink-0 w-16">
        <div
          className={`rounded-full h-8 w-8 text-sm flex justify-center items-center text-center ${getBallStyle()}`}
        >
          {item.overs}
        </div>
      </div>
      <div className="flex text-xs text-gray-800 items-center">
        <p>
          {item.bowler_name} To {item.striker_name}
          {item.run &&
            ` — ${item.run} run${
              item.run !== "1" ? "s" : ""
            }`}
        </p>
        {item.wicket_status === "True" && (
          <div className="text-red-600 font-semibold mt-1">
            {item.striker_name} - {item.wicket_type}
            {item.fielder_name &&
              ` (by ${item.fielder_name})`}
          </div>
        )}
      </div>
    </div>
  )
}

const Commentary = ({ matchId, team1, team2 }) => {
  const [activeTeam, setActiveTeam] = useState(null)

  const {
    data: team1Data = [],
    isLoading: loading1,
    isError: error1,
  } = useGetBallByBallDetailsQuery({
    id: matchId,
    teamId: team1,
  })

  const {
    data: team2Data = [],
    isLoading: loading2,
    isError: error2,
  } = useGetBallByBallDetailsQuery({
    id: matchId,
    teamId: team2,
  })

  const groupByOver = (data) => {
    if (!Array.isArray(data)) return {}
    return data.reduce((acc, ball) => {
      const overNum = Math.floor(parseFloat(ball.overs)) + 1
      if (!acc[overNum]) acc[overNum] = []
      acc[overNum].push(ball)
      return acc
    }, {})
  }

  const renderTeam = (
    teamData,
    oversGrouped,
    title,
    key
  ) => {
    if (!teamData.length) return null

    return (
      <div className="py-2 px-4">
        <div
          className="flex justify-between items-center cursor-pointer bg-gray-200 p-3 rounded-md"
          onClick={() =>
            setActiveTeam(activeTeam === key ? null : key)
          }
        >
          <h2 className="text-sm font-bold">{title}</h2>
          <span className="text-gray-600 text-[10px]">
            {activeTeam === key ? "▲" : "▼"}
          </span>
        </div>

        {activeTeam === key && (
          <div className="divide-y divide-gray-200 bg-white p-4 rounded-md shadow">
            {Object.entries(oversGrouped)
              .sort(
                (a, b) =>
                  parseFloat(b[0]) - parseFloat(a[0])
              )
              .map(([overNum, balls]) => (
                <React.Fragment key={overNum}>
                  <div className="border-b border-gray-200 p-4 bg-gray-50">
                    <h2 className="text-md font-semibold text-gray-800">
                      End of over {overNum}
                    </h2>
                  </div>
                  {balls.map((ball, idx) => (
                    <CommentaryItem
                      key={`${ball.overs}-${idx}`}
                      item={ball}
                    />
                  ))}
                </React.Fragment>
              ))}
          </div>
        )}
      </div>
    )
  }

  if (loading1 || loading2)
    return <p>Loading commentary...</p>
  if (error1 || error2)
    return <p>Error loading commentary</p>

  const team1Overs = groupByOver(team1Data)
  const team2Overs = groupByOver(team2Data)

  return (
    <div className="max-w-2xl mx-auto">
      {renderTeam(
        team1Data,
        team1Overs,
        "First Innings",
        "team1"
      )}
      {renderTeam(
        team2Data,
        team2Overs,
        "Second Innings",
        "team2"
      )}
    </div>
  )
}

export default Commentary
