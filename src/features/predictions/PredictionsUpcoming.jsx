import MatchCard from "../../components/MatchCard"
import { useGetPredictionUpcomingMatchesQuery } from "../api/apiSlice"
import { Link } from "react-router-dom"

const PredictionsUpcoming = () => {
  const {
    data: matches,
    isLoading,
    isError,
  } = useGetPredictionUpcomingMatchesQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError)
    return <p>Error loading prediction matches.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {matches.map((match) => (
        <div key={match.match_det_id}>
          <Link
            to={`/predictions/upcoming/match/${match.match_det_id}`}
          >
            <MatchCard match={match} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PredictionsUpcoming
