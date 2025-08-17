import { useDispatch } from "react-redux"
import { clearUser } from "../api/authSlice"
import { useNavigate } from "react-router-dom"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () => {
    dispatch(clearUser())
    navigate("/login")
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={logout}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
