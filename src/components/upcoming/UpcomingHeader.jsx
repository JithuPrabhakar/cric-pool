import {
  useNavigate,
  useLocation,
  NavLink,
} from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"

const UpcomingHeader = ({
  prizePool,
  spots,
  matchId,
  isEdit,
}) => {
  const navigate = useNavigate()
  const location = useLocation()

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
            {prizePool || 50000}
          </p>
        </div>
        <div className="text-right text-white">
          <p className="text-sm font-medium text-white">
            Total Spots
          </p>
          <p className="text-sm mt-1 text-white">
            {spots || 10000} Spots
          </p>
        </div>
      </div>

      {/* Dynamic Join/Edit Team Button */}
      <NavLink
        to={
          isEdit
            ? `/edit-team/${matchId}`
            : `/create-team/${matchId}`
        }
        className="block w-full mt-4"
      >
        <button className="w-full bg-accent text-white py-2 rounded hover:bg-secondary-dark">
          {isEdit ? "EDIT TEAM" : "JOIN MATCH"}
        </button>
      </NavLink>
    </div>
  )
}

export default UpcomingHeader
