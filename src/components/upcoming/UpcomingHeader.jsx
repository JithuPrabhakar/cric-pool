import {
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"

const UpcomingHeader = ({ prizePool, spots, matchId }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Check if the current path is from "my-matches" or "predictions"
  const isFromMyMatches =
    location.pathname.includes("my-matches")

  const handleBack = () => {
    if (location.key !== "default") {
      navigate(-1)
    } else {
      navigate("/")
    }
  }

  return (
    <div className="p-4 bg-primary">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="text-white mb-2"
      >
        <IoArrowBackOutline />
      </button>

      {/* Prize Pool & Spots */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium text-white">
            Total Prize Pool
          </p>
          <p className="text-lg font-bold text-white">
            {prizePool}
          </p>
        </div>
        <div className="text-right text-white">
          <p className="text-sm font-medium text-white">
            Total Spots
          </p>
          <p className="text-sm text-right mt-1 text-white">
            {spots} Spots
          </p>
        </div>
      </div>

      {/* Dynamic Join/Edit Team Button */}
      <NavLink
        to={
          isFromMyMatches
            ? `/edit-team/${matchId}`
            : `/create-team/${matchId}`
        }
        className="block w-full mt-4"
      >
        <button className="w-full bg-accent text-white py-2 rounded hover:bg-secondary-dark">
          {isFromMyMatches ? "EDIT TEAM" : "JOIN MATCH"}
        </button>
      </NavLink>
    </div>
  )
}

export default UpcomingHeader
