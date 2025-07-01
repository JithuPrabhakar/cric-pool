import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSignInUserMutation } from "../api/apiSlice"
import { setUser } from "../api/authSlice"
import FormComponent from "../../components/start/FormComponent"
import Top from "../../components/start/Top"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signInUser, { isLoading, isError, error }] =
    useSignInUserMutation()

  const handleLogin = async (formData) => {
    try {
      const result = await signInUser(formData).unwrap()

      const user = result?.[1]
      if (user?.user_id && user?.name) {
        dispatch(
          setUser({
            user_id: user.user_id,
            name: user.name,
            image: user.Image || "",
          })
        )
        navigate("/") // go to main page after login
      } else {
        alert("Invalid response from server")
      }
    } catch (err) {
      console.error(
        "Login Failed:",
        err.data || "Unknown error"
      )
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"Login to your account"} />
      <FormComponent
        formType="login"
        title="Welcome Back!"
        buttonText={isLoading ? "Logging in..." : "Login"}
        alternateText="Don't have an account?"
        redirectLink="/register"
        onSubmit={handleLogin}
      />
      {isError && (
        <p className="text-red-500 mt-4">
          {error?.data || "Login failed. Please try again."}
        </p>
      )}
    </div>
  )
}

export default Login
