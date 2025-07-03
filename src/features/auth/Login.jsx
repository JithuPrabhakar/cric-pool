import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSignInUserMutation } from "../api/apiSlice"
import { setUser } from "../api/authSlice"
import FormComponent from "../../components/start/FormComponent"
import Top from "../../components/start/Top"
import { useState, useEffect } from "react"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signInUser, { isLoading }] =
    useSignInUserMutation()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  const handleLogin = async (formData) => {
    setErrors({}) // Clear previous errors

    if (!formData.username || !formData.password) {
      const newErrors = {}
      if (!formData.username)
        newErrors.username = "Username is required"
      if (!formData.password)
        newErrors.password = "Password is required"
      setErrors(newErrors)
      return
    }

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
        navigate("/")
      } else {
        setErrors({
          username: "Invalid response from server",
        })
      }
    } catch (err) {
      console.error("Login Failed:", err)
      setErrors({
        username: "Invalid username or password",
      })
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title="Login to your account" />
      <FormComponent
        formType="login"
        title="Welcome Back!"
        buttonText={isLoading ? "Logging in..." : "Login"}
        alternateText="Don't have an account?"
        redirectLink="/register"
        onSubmit={handleLogin}
        errors={errors}
      />
    </div>
  )
}

export default Login
