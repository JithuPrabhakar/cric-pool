import { useNavigate } from "react-router-dom"
import { useSignUpUserMutation } from "../api/apiSlice"
import Top from "../../components/start/Top"
import FormComponent from "../../components/start/FormComponent"
import { useState, useEffect } from "react"

const Register = () => {
  const navigate = useNavigate()
  const [signUpUser, { isLoading }] =
    useSignUpUserMutation()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => setErrors({}), 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  const handleRegister = async (formData) => {
    setErrors({}) // Clear previous errors

    const newErrors = {}
    if (!formData.username)
      newErrors.username = "Username is required"
    if (!formData.password)
      newErrors.password = "Password is required"
    if (!formData.confirmPassword)
      newErrors.confirmPassword =
        "Please confirm your password"
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      const result = await signUpUser({
        name: formData.name,
        username: formData.username,
        password: formData.password,
      }).unwrap()

      const status = result?.[0]
      if (status?.StatusCode === 0) {
        navigate("/otp", {
          state: { username: formData.username },
        })
      } else {
        setErrors({
          username:
            status?.Message || "Registration failed",
        })
      }
    } catch (err) {
      console.error("API Error:", err)
      setErrors({
        username: "Something went wrong. Please try again.",
      })
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title="Create a new account" />
      <FormComponent
        formType="register"
        title="Sign Up to Play"
        buttonText={
          isLoading ? "Creating Account..." : "Sign Up"
        }
        alternateText="Already have an account?"
        redirectLink="/login"
        onSubmit={handleRegister}
        errors={errors}
      />
    </div>
  )
}

export default Register
