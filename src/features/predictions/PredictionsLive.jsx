import MatchCard from "../../components/MatchCard"
import { useGetPredictionLiveMatchesQuery } from "../api/apiSlice"
import { Link } from "react-router-dom"

const PredictionsLive = () => {
  const {
    data: matches,
    isLoading,
    isError,
  } = useGetPredictionLiveMatchesQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading matches.</p>

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches.map((match) => (
        <div key={match.match_det_id}>
          <Link
            to={`/predictions/live/match/${match.match_det_id}`}
          >
            <MatchCard match={match} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PredictionsLive
