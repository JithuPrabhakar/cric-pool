import LiveMatchTabs from "../../components/live/LiveMatchTabs"
import LiveMatchHeader from "../../components/live/LiveMatchHeader"
import { useParams } from "react-router-dom"
import { useGetMatchDetailsQuery } from "../api/apiSlice"
import { useEffect } from "react"

const PredictionsLiveDetails = () => {
  const { id } = useParams()
  const {
    data: match,
    isLoading,
    isError,
    refetch,
  } = useGetMatchDetailsQuery(Number(id), {
    skip: !id,
  })

  // Auto-refetch every 30 seconds
  useEffect(() => {
    if (!id) return

    const interval = setInterval(() => {
      refetch()
    }, 30000) // 30 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [id, refetch])

  if (isLoading) return <p>Loading match details...</p>
  if (isError) return <p>Error loading match details.</p>

  return (
    <div className="rounded-lg">
      <LiveMatchHeader match={match[0]} />
      <LiveMatchTabs match={match[0]} />
    </div>
  )
}

export default PredictionsLiveDetails
