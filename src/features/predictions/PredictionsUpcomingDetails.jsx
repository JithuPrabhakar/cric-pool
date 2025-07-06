import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  useGetPredictionMatchDetailsQuery,
  useGetPrizeDetailsQuery,
  useGetMyFantasySquadQuery,
} from "../api/apiSlice"
import UpcomingHeader from "../../components/upcoming/UpcomingHeader"
import UpcomingTabs from "../../components/upcoming/UpcomingTabs"

const PredictionsUpcomingDetails = () => {
  const { id } = useParams()
  const [isEdit, setIsEdit] = useState(false)
  const [appUserId, setAppUserId] = useState(null)

  // Fetch user_id from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { user_id } = JSON.parse(storedUser)
      setAppUserId(user_id)
    }
  }, [])

  // Fetch match details
  const {
    data: match,
    isLoading,
    isError,
  } = useGetPredictionMatchDetailsQuery(Number(id))

  // Fetch prize details
  const { data: prizes } = useGetPrizeDetailsQuery(
    Number(id)
  )

  // Check if user has already created a team
  const { data: userTeam, isLoading: isTeamLoading } =
    useGetMyFantasySquadQuery(
      { id: Number(id), player_id: appUserId },
      { skip: !appUserId || !id }
    )

  // Set isEdit to true if team exists
  useEffect(() => {
    if (userTeam && userTeam.lstPlayers?.length > 0) {
      setIsEdit(true)
    }
  }, [userTeam])

  if (isLoading || isTeamLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  return (
    <div>
      <UpcomingHeader
        prizePool={match.prize_pool}
        spots={match.spots}
        isEdit={isEdit}
        matchId={id}
      />
      <UpcomingTabs
        prizes={prizes}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        matchId={id}
      />
    </div>
  )
}

export default PredictionsUpcomingDetails
