import { memo } from "react"
import { useGetPredictionMatchDetailsQuery } from "../../features/api/apiSlice"

const CreateTeamHeader = memo(({ id }) => {
  const {
    data: match,
    isLoading,
    isError,
  } = useGetPredictionMatchDetailsQuery(id)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  return (
    <div className="p-4 bg-primary text-center">
      <h2 className="text-lg font-bold text-white">
        Create Your Team
      </h2>
      <div className="flex justify-between items-center text-white">
        <div className="flex flex-col items-center">
          <img
            src={match[0].team1_logo}
            alt={match[0].team1_sname}
            className="w-12 h-12 object-contain"
          />
          <p className="text-sm font-medium">
            {match[0].team1_name}
          </p>
        </div>
        <div className="text-center"></div>
        <div className="flex flex-col items-center">
          <img
            src={match[0].team2_logo}
            alt={match[0].team2_sname}
            className="w-12 h-12 object-contain"
          />
          <p className="text-sm font-medium">
            {match[0].team2_name}
          </p>
        </div>
      </div>
    </div>
  )
})

export default CreateTeamHeader
