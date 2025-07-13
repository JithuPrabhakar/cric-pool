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
      {/* Player Header with Primary Background */}
      <div className="flex items-center gap-4 mb-4 p-4 rounded-md bg-primary text-white shadow">
        <img
          src={playerInfo.player_logo}
          alt={playerInfo.player_name}
          className="w-12 h-12 rounded-full object-cover border border-white"
        />
        <div>
          <h2 className="text-lg font-bold">
            {playerInfo.player_name}
          </h2>
          <p className="text-sm">
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

      {/* Table Layout */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-gray-700 border-b border-gray-200">
              <th className="py-2 px-3 font-semibold">
                Event
              </th>
              <th className="py-2 px-3 font-semibold">
                Points
              </th>
              <th className="py-2 px-3 font-semibold">
                Actual
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, index) => (
              <tr
                key={index}
                className="border-b border-gray-100"
              >
                <td className="py-2 px-3">
                  {event.eventname}
                </td>
                <td className="py-2 px-3">{event.point}</td>
                <td className="py-2 px-3">
                  {event.actual}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredEvents.length === 0 && (
          <p className="text-sm text-gray-400 mt-2">
            No events with points to display.
          </p>
        )}
      </div>
    </div>
  )
}

export default Player
