import { memo } from "react"
import { useGetPredictionUpcomingMatchesQuery } from "../../features/api/apiSlice"

const CreateTeamHeader = memo(({ id }) => {
  const {
    data: match,
    isLoading,
    isError,
  } = useGetPredictionUpcomingMatchesQuery(id)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  console.log(match)

  return (
    <div className="p-4 bg-primary text-center">
      <h2 className="text-lg font-bold text-white">
        Create Your Team
      </h2>
      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col items-center">
          <img
            src={match.team1.logo}
            alt={match.team1.short_name}
            className="w-12 h-12 object-contain"
          />
          <p className="text-sm font-medium">
            {match.team1.name}
          </p>
        </div>
        <div className="text-center"></div>
        <div className="flex flex-col items-center">
          <img
            src={match.team2.logo}
            alt={match.team2.short_name}
            className="w-12 h-12 object-contain"
          />
          <p className="text-sm font-medium">
            {match.team2.name}
          </p>
        </div>
      </div>
    </div>
  )
})

export default CreateTeamHeader
