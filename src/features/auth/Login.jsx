import { useNavigate } from "react-router-dom"
import { useSignInUserMutation } from "../api/apiSlice"
import FormComponent from "../../components/start/FormComponent"
import Top from "../../components/start/Top"

const Login = () => {
  const navigate = useNavigate()
  const [signInUser, { isLoading, isError, error }] =
    useSignInUserMutation()

  const handleLogin = async (formData) => {
    try {
      const result = await signInUser(formData).unwrap()

      if (result) {
        localStorage.setItem("token", result.token) // Store token if needed
        localStorage.setItem(
          "user",
          JSON.stringify(result.user)
        )

        console.log("Login Successful", result)
        navigate("/")
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
