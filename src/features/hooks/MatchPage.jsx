import { useParams } from "react-router-dom"
import { useRealtimeMatchDetails } from "./useRealtimeMatchDetails"

export default function MatchPage() {
  const { id } = useParams()
  const { match, isLoading, isError } =
    useRealtimeMatchDetails(id)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Match not found</p>

  return (
    <div>
      <h1>{match.name}</h1>
      <p>Status: {match.status}</p>
    </div>
  )
}
