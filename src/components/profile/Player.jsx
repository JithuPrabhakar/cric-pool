import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetFantasyTeamPlayerPointsQuery } from "../../features/api/apiSlice"

const Player = () => {
  const { id, player_id } = useParams()
  const [showOnlyNonZero, setShowOnlyNonZero] =
    useState(false)

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useGetFantasyTeamPlayerPointsQuery({ id, player_id })

  if (isLoading)
    return <p className="p-4">Loading player points...</p>
  if (isError)
    return (
      <p className="p-4 text-red-600">
        Error: {error?.message || "Failed to fetch data"}
      </p>
    )

  if (!data || data.length === 0)
    return <p className="p-4">No data found</p>

  const playerInfo = data[0]

  const filteredEvents = showOnlyNonZero
    ? data.filter((event) => parseFloat(event.point) !== 0)
    : data

  return (
    <div className="p-4">
      {/* Player Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={playerInfo.player_logo}
          alt={playerInfo.player_name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-lg font-bold">
            {playerInfo.player_name}
          </h2>
          <p className="text-sm text-gray-500">
            Total Points: {playerInfo.total_point}
          </p>
        </div>
      </div>

      {/* Toggle for Non-Zero Filter */}
      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          id="nonZeroToggle"
          checked={showOnlyNonZero}
          onChange={() =>
            setShowOnlyNonZero((prev) => !prev)
          }
        />
        <label htmlFor="nonZeroToggle" className="text-sm">
          Show only events with non-zero points
        </label>
      </div>

      {/* Event Breakdown */}
      <div className="bg-white p-4 rounded-md shadow">
        <h3 className="text-md font-semibold mb-2">
          Point Breakdown
        </h3>
        {filteredEvents.length > 0 ? (
          <ul>
            {filteredEvents.map((event, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="text-sm font-medium">
                    {event.eventname}
                  </p>
                  <p className="text-xs text-gray-500">
                    {event.actual} | {event.PointMode}
                  </p>
                </div>
                <div className="text-right font-semibold text-sm">
                  {event.point}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">
            No events with points
          </p>
        )}
      </div>
    </div>
  )
}

export default Player
