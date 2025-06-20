import MatchCard from "../../components/MatchCard"
import { useGetUpcomingMatchesQuery } from "../api/apiSlice"
import { Link } from "react-router-dom"

const MyMatchesUpcoming = () => {
  const {
    data: matches,
    isLoading,
    isError,
  } = useGetUpcomingMatchesQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading matches.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {matches.map((match) => (
        <div key={match.match_det_id}>
          <Link
            to={`/my-matches/upcoming/match/${match.match_det_id}`}
          >
            <MatchCard match={match} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyMatchesUpcoming
