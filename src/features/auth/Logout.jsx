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

  return <button onClick={logout}>Logout</button>
}

export default LogoutButton
