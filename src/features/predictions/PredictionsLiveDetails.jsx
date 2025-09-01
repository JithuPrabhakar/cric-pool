import LiveMatchTabs from "../../components/live/LiveMatchTabs"
import LiveMatchHeader from "../../components/live/LiveMatchHeader"
import { useParams } from "react-router-dom"
import { useRealtimeMatch } from "../../useRealtimeMatch"
import { useGetPredictionMatchDetailsQuery } from "../api/apiSlice"

const MyMatchesLiveDetails = () => {
  const { id } = useParams()
  const {
    data: live,
    loading: liveLoading,
    error: liveError,
  } = useRealtimeMatch(id)
  console.log(live)
  const {
    data: apiData,
    isLoading: apiLoading,
    isError: apiError,
  } = useGetPredictionMatchDetailsQuery(Number(id))

  if (apiLoading || liveLoading) return <p>Loading...</p>
  if (apiError)
    return <p>Error loading match details (API).</p>
  if (liveError)
    return (
      <p>Error loading live data: {liveError.message}</p>
    )

  // Your original API returned an array; grab the first item
  const base = apiData?.[0] ?? {}
  const merged = { ...base, ...live } // live fields override base if overlaps

  return (
    <div className="rounded-lg">
      <LiveMatchHeader match={{ ...merged }} />
      <LiveMatchTabs match={{ ...merged }} />
    </div>
  )
}

export default MyMatchesLiveDetails
