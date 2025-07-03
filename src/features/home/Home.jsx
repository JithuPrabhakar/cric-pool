import { Link } from "react-router-dom"
import MatchCard from "../../components/MatchCard"
import { useGetUpcomingMatchesQuery } from "../api/apiSlice"
import { useGetPredictionLiveMatchesQuery } from "../api/apiSlice"

const Home = () => {
  const {
    data: matches,
    isLoading,
    isError,
  } = useGetUpcomingMatchesQuery()

  const {
    data: liveMatches,
    isLoading: load,
    isError: error,
  } = useGetPredictionLiveMatchesQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading matches.</p>
  if (error) return <p>No upcoming matches.</p>

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">
        Ongoing Matches
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!load &&
          liveMatches.map((match) => (
            <div key={match.match_det_id}>
              <Link
                to={`/predictions/live/match/${match.match_det_id}`}
              >
                <MatchCard match={match} />
              </Link>
            </div>
          ))}
      </div>
      <h2 className="my-4 text-lg font-semibold text-gray-700">
        Upcoming Matches
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!isLoading &&
          matches.map((match) => (
            <div key={match.match_det_id}>
              <Link
                to={`/predictions/upcoming/match/${match.match_det_id}`}
              >
                <MatchCard match={match} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
