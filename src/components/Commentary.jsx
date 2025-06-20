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
    <div className="flex gap-4 border-b border-gray-200 p-4">
      {/* Ball number */}
      <div className="flex-shrink-0 w-16">
        <div
          className={`rounded-full h-10 w-10 flex justify-center items-center text-center ${getBallStyle()}`}
        >
          {item.overs}
        </div>
      </div>

      {/* Commentary Details */}
      <div className="flex-grow text-sm text-gray-800">
        <p>
          <strong>Bowler:</strong> {item.bowler_name} <br />
          <strong>To:</strong> {item.striker_name}
          {item.run &&
            ` — ${item.run} run${
              item.run !== "1" ? "s" : ""
            }`}
        </p>

        {item.wicket_status === "True" && (
          <div className="text-red-600 font-semibold mt-1">
            WICKET: {item.striker_name} - {item.wicket_type}
            {item.fielder_name &&
              ` (by ${item.fielder_name})`}
          </div>
        )}

        {/* Optional rich commentary from backend */}
        {item.last_ball_det && (
          <div
            className="mt-2 text-xs text-gray-600"
            dangerouslySetInnerHTML={{
              __html: item.last_ball_det,
            }}
          />
        )}
      </div>
    </div>
  )
}

const OverSummary = ({ overData, overNumber }) => {
  const totalRuns = overData.reduce(
    (sum, ball) => sum + parseInt(ball.run || 0),
    0
  )
  const totalWickets = overData.filter(
    (ball) => ball.wicket_status === "True"
  ).length
  const bowler = overData[0]?.bowler_name || ""

  return (
    <div className="border-b border-gray-200 p-4 bg-gray-50">
      <h2 className="text-lg font-semibold text-gray-800">
        End of over {overNumber}
      </h2>
      <p className="text-sm text-gray-600">
        {bowler} • {totalRuns} Run
        {totalRuns !== 1 ? "s" : ""} • {totalWickets} Wicket
        {totalWickets !== 1 ? "s" : ""}
      </p>
    </div>
  )
}

const Commentary = ({ matchId, teamId }) => {
  const {
    data: team1Data,
    isLoading: loading1,
    isError: error1,
  } = useGetBallByBallDetailsQuery({
    matchId,
    teamId,
  })

  !loading1 && console.log(team1Data)
  error1 && console.log(error1)

  const [activeInning, setActiveInning] = useState("first")

  // const firstInnings = commentary?.firstInnings || []
  // const secondInnings = commentary?.secondInnings || []

  const groupByOver = (data) => {
    if (!Array.isArray(data)) return {}
    return data.reduce((acc, ball) => {
      const overNum = Math.floor(parseFloat(ball.overs)) + 1
      if (!acc[overNum]) {
        acc[overNum] = []
      }
      acc[overNum].push(ball)
      return acc
    }, {})
  }

  const firstInningsOvers = groupByOver(firstInnings)
  const secondInningsOvers = groupByOver(secondInnings)

  const renderInnings = (
    inningsData,
    inningsOvers,
    title,
    key
  ) => {
    if (!inningsData.length) return null

    return (
      <div className="mb-4">
        {/* Accordion Header */}
        <div
          className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center rounded-md"
          onClick={() =>
            setActiveInning(
              activeInning === key ? null : key
            )
          }
        >
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="text-gray-600">
            {activeInning === key ? "▲" : "▼"}
          </span>
        </div>

        {/* Accordion Content */}
        {activeInning === key && (
          <div className="divide-y divide-gray-200 bg-white p-4 rounded-md shadow">
            {Object.entries(inningsOvers)
              .sort(
                ([a], [b]) => parseFloat(b) - parseFloat(a)
              )
              .map(([overNum, balls]) => (
                <React.Fragment key={overNum}>
                  {balls.some(
                    (ball) =>
                      parseFloat(ball.over) ===
                      parseFloat(overNum)
                  ) && (
                    <OverSummary
                      overData={balls}
                      overNumber={overNum}
                    />
                  )}
                  {balls
                    .sort(
                      (a, b) =>
                        parseFloat(b.over) -
                        parseFloat(a.over)
                    )
                    .map((ball, idx) => (
                      <CommentaryItem
                        key={`${ball.over}-${idx}`}
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

  if (!firstInnings.length && !secondInnings.length) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4">
        <p className="text-gray-500 text-center">
          No commentary available
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {renderInnings(
        firstInnings,
        firstInningsOvers,
        "First Innings",
        "first"
      )}
      {renderInnings(
        secondInnings,
        secondInningsOvers,
        "Second Innings",
        "second"
      )}
    </div>
  )
}

export default Commentary
