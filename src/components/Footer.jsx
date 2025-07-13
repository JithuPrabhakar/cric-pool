import { Link, useLocation } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { MdOutlineSportsCricket } from "react-icons/md"
import { BiSolidCricketBall } from "react-icons/bi"
import { MdOnlinePrediction } from "react-icons/md"

const Footer = () => {
  const location = useLocation()
  const currentPath = location.pathname

  // Check if the current path starts with the given route
  const isActive = (path) => currentPath.startsWith(path)

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-3xl z-10 flex justify-around items-center px-2 py-4">
      {/* Home */}
      <Link
        to="/"
        className={`flex flex-col items-center ${
          currentPath === "/"
            ? "text-primary text-xl"
            : "text-muted"
        } hover:text-primary hover:text-xl`}
      >
        <FaHome />
        <p className="text-xs">Home</p>
      </Link>

      {/* My Matches */}
      <Link
        to="/my-matches/upcoming"
        className={`flex flex-col items-center ${
          isActive("/my-matches")
            ? "text-primary text-xl"
            : "text-muted"
        } hover:text-primary hover:text-xl`}
      >
        <MdOutlineSportsCricket />
        <p className="text-xs">My Matches</p>
      </Link>

      {/* International Matches */}
      {/* <Link
        to="/international-matches"
        className={`flex flex-col items-center ${
          isActive("/international-matches")
            ? "text-primary text-xl"
            : "text-muted"
        } hover:text-primary hover:text-xl`}
      >
        <BiSolidCricketBall />
        <p className="text-xs">International Matches</p>
      </Link> */}

      {/* Predictions */}
      <Link
        to="/predictions/upcoming"
        className={`flex flex-col items-center ${
          isActive("/predictions")
            ? "text-primary text-xl"
            : "text-muted"
        } hover:text-primary hover:text-xl`}
      >
        <MdOnlinePrediction />
        <p className="text-xs">Predictions</p>
      </Link>
    </nav>
  )
}

export default Footer
