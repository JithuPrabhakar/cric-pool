import React, { useState } from "react"

const Commentary = ({
  ball_by_ball_team1,
  ball_by_ball_team2,
}) => {
  const [activeTeam, setActiveTeam] = useState("team1")

  const toggleAccordion = (team) => {
    setActiveTeam(activeTeam === team ? null : team)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Team 1 Commentary */}
      <div className="mb-4">
        <div
          className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center rounded-md"
          onClick={() => toggleAccordion("team1")}
        >
          <h2 className="text-sm font-bold">
            Team 1 Commentary
          </h2>
          <span className="text-gray-600">
            {activeTeam === "team1" ? "▲" : "▼"}
          </span>
        </div>

        {activeTeam === "team1" && (
          <div
            className="bg-white p-4 rounded-md shadow"
            dangerouslySetInnerHTML={{
              __html: ball_by_ball_team1,
            }}
          />
        )}
      </div>

      {/* Team 2 Commentary */}
      <div className="mb-4">
        <div
          className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center rounded-md"
          onClick={() => toggleAccordion("team2")}
        >
          <h2 className="text-sm font-bold">
            Team 2 Commentary
          </h2>
          <span className="text-gray-600">
            {activeTeam === "team2" ? "▲" : "▼"}
          </span>
        </div>

        {activeTeam === "team2" && (
          <div
            className="bg-white p-4 rounded-md shadow"
            dangerouslySetInnerHTML={{
              __html: ball_by_ball_team2,
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Commentary
