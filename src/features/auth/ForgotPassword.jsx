import { useState } from "react"
import Button from "../../components/start/Button"
import FormWrapper from "../../components/start/FormWrapper"
import InputField from "../../components/start/InputField"
import Top from "../../components/start/Top"
import { useForgotPasswordMutation } from "../api/apiSlice"

const ForgotPassword = () => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // Mutation for forgot password
  const [forgotPassword, { isLoading }] =
    useForgotPasswordMutation()

  // Handle Input Change
  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  // Handle Form Submission
  const handleSubmit = async () => {
    if (!username.trim()) {
      setError("Please enter a valid username.")
      return
    }

    try {
      const response = await forgotPassword({
        username,
      }).unwrap()

      if (response?.status === "success") {
        setSuccessMessage(
          "Password reset link sent successfully. Check your inbox."
        )
        setError("") // Clear any previous error
      } else {
        setError(
          "Failed to send reset link. Please try again."
        )
      }
    } catch (err) {
      console.error("Error resetting password:", err)
      setError(
        "Failed to send reset link. Please try again."
      )
      setSuccessMessage("") // Clear any previous success message
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"Forgot Password"} />
      <FormWrapper>
        <p className="text-sm text-muted text-center mb-6">
          Enter your username to reset your password.
        </p>

        {/* Input Field for Username */}
        <InputField
          id={"username"}
          label={"Username"}
          type={"text"}
          placeholder={"Enter your username"}
          value={username}
          onChange={handleInputChange}
        />

        {/* Success/Error Messages */}
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

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className={`w-full text-white py-2 rounded ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-secondary"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </Button>
      </FormWrapper>
    </div>
  )
}

export default ForgotPassword
