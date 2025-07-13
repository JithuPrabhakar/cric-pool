import { useEffect, useState } from "react"
import MatchCard from "../../components/MatchCard"
import { useGetMyLiveMatchesQuery } from "../api/apiSlice"
import { Link } from "react-router-dom"

const MyMatchesLive = () => {
  const [appUserId, setAppUserId] = useState("")

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      const { user_id } = JSON.parse(storedUser)
      setAppUserId(user_id)
    }
  }, [])

  const {
    data: matches,
    isLoading,
    isError,
    refetch, // <- This is key
  } = useGetMyLiveMatchesQuery(
    { userid: appUserId },
    { skip: !appUserId } // skip until appUserId is ready
  )

  // Refresh every 30 seconds
  useEffect(() => {
    if (!appUserId) return

    const interval = setInterval(() => {
      refetch()
    }, 30000) // 30 seconds

    return () => clearInterval(interval) // cleanup on unmount
  }, [appUserId, refetch])

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading matches.</p>
  if (matches?.length === 0)
    return <p>You haven't joined any matches yet..!!</p>

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {matches?.map((match) => (
        <div key={match.match_det_id}>
          <Link
            to={`/my-matches/live/match/${match.match_det_id}`}
          >
            <MatchCard match={match} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MyMatchesLive
