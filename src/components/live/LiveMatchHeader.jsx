import { IoArrowBackOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"

const LiveMatchHeader = ({ match }) => {
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
    <header className="bg-primary text-white p-4">
      <NavLink to={`/predictions/live`}>
        <button className="text-white" onClick={handleBack}>
          <IoArrowBackOutline />
        </button>
      </NavLink>

      <div className="text-sm font-bold text-center">
        <h1>{match.team1_name}</h1>
        vs
        <h1>{match.team2_name}</h1>
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-center">
          {/* Team 1 Details */}
          <div className="text-center">
            <img
              src={match.team1_Logo}
              alt={`${match.team1_sname} Logo`}
              className="w-10 h-10 mx-auto mb-2"
            />
            <p className="text-sm">{match.team1_sname}</p>
            <p className="text-xl font-bold">
              {match.team1_score + "/" + match.team1_wicket}{" "}
              <span className="text-sm">
                ({match.team1_over})
              </span>
            </p>
          </div>

          {/* Match Status */}
          <div className="text-center">
            <p className="text-sm font-medium">
              <span className="text-green-500 font-medium">
                ●
              </span>{" "}
              Going Live
            </p>
          </div>

          {/* Team 2 Details */}
          <div className="text-center">
            <img
              src={match.team2_logo}
              alt={`${match.team2_sname} Logo`}
              className="w-10 h-10 mx-auto mb-2"
            />
            <p className="text-sm">{match.team2_sname}</p>
            <p className="text-xl font-bold">
              {match.team2_score + "/" + match.team2_wicket}{" "}
              <span className="text-sm">
                ({match.team2_over})
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LiveMatchHeader
