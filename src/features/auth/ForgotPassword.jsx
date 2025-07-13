import { useState, useEffect } from "react"
import Button from "../../components/start/Button"
import FormWrapper from "../../components/start/FormWrapper"
import InputField from "../../components/start/InputField"
import Top from "../../components/start/Top"
import { useForgotPasswordMutation } from "../api/apiSlice"

const ForgotPassword = () => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const [forgotPassword, { isLoading }] =
    useForgotPasswordMutation()

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = async () => {
    if (!username.trim()) {
      setError("Please enter a phone number.")
      return
    }

    try {
      const res = await forgotPassword({
        username,
      }).unwrap()
      const status = res?.[0]

      if (status?.StatusCode === 0) {
        setSuccessMessage(
          "Password send to your mobile number, check your messages"
        )
        setError("")
      } else {
        setError(
          status?.Message || "Failed to send reset link."
        )
        setSuccessMessage("")
      }
    } catch (err) {
      console.error("Error resetting password:", err)
      setError("Something went wrong. Please try again.")
      setSuccessMessage("")
    }
  }

  // ✅ Auto-clear messages after 5 seconds
  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError("")
        setSuccessMessage("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, successMessage])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"Forgot Password"} />
      <FormWrapper>
        <p className="text-sm text-muted text-center mb-6">
          Enter your username to reset your password.
        </p>

        <InputField
          id="username"
          label="Phone number"
          type="number"
          placeholder="Enter your phone number"
          value={username}
          onChange={handleInputChange}
        />

        {/* Error/Success messages */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-2">
            {error}
          </p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm text-center mb-2">
            {successMessage}
          </p>
        )}

        <Button
          onClick={handleSubmit}
          className={`w-full text-white py-2 rounded ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-secondary"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Recover Password"}
        </Button>
      </FormWrapper>
    </div>
  )
}

export default ForgotPassword
