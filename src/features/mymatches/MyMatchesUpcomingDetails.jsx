import React from "react"
import { useParams } from "react-router-dom"
import { useGetMatchDetailsQuery } from "../api/apiSlice"
import { useGetPrizeDetailsQuery } from "../api/apiSlice"
import UpcomingHeader from "../../components/upcoming/UpcomingHeader"
import UpcomingTabs from "../../components/upcoming/UpcomingTabs"

const MyMatchesUpcomingDetails = () => {
  const { id } = useParams()
  const {
    data: match,
    isLoading,
    isError,
  } = useGetMatchDetailsQuery(Number(id))

  const { data: prizes } = useGetPrizeDetailsQuery(
    Number(id)
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  const isEdit = false

  return (
    <div>
      <UpcomingHeader
        prizePool={match.prize_pool}
        spots={match.spots}
        isEdit={isEdit}
        matchId={id}
      />
      <UpcomingTabs prizes={prizes} />
    </div>
  )
}

export default MyMatchesUpcomingDetails
