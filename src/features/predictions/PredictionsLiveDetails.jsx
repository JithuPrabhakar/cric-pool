import LiveMatchTabs from "../../components/live/LiveMatchTabs"
import LiveMatchHeader from "../../components/live/LiveMatchHeader"
import { useParams } from "react-router-dom"
import { useGetPredictionMatchDetailsQuery } from "../api/apiSlice"

const MyMatchesLiveDetails = () => {
  const { id } = useParams()
  const {
    data: match,
    isLoading,
    isError,
  } = useGetPredictionMatchDetailsQuery(Number(id))

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  return (
    <div className="rounded-lg">
      <LiveMatchHeader match={match[0]} />
      <LiveMatchTabs match={match[0]} />
    </div>
  )
}

export default MyMatchesLiveDetails
