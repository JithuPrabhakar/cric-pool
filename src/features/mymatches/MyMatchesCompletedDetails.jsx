import CompletedMatchTabs from "../../components/completed/CompletedMatchTabs"
import CompletedMatchHeader from "../../components/completed/CompletedMatchHeader"
import { useParams } from "react-router-dom"
import { useGetMatchDetailsQuery } from "../api/apiSlice"

const MyMatchesCompletedDetails = () => {
  const { id } = useParams()
  const {
    data: match,
    isLoading,
    isError,
  } = useGetMatchDetailsQuery(Number(id))

  // !isLoading && console.log(match)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading match details.</p>

  return (
    <div className="rounded-lg">
      <CompletedMatchHeader match={match[0]} />
      <CompletedMatchTabs match={match[0]} />
    </div>
  )
}

export default MyMatchesCompletedDetails
