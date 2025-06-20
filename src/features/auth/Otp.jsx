import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/start/Button"
import FormWrapper from "../../components/start/FormWrapper"
import InputField from "../../components/start/InputField"
import Top from "../../components/start/Top"
import {
  useConfirmOTPMutation,
  useResendOTPMutation,
} from "../api/apiSlice"

const Otp = () => {
  const navigate = useNavigate()

  // States for OTP, error, and loading
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [resendCooldown, setResendCooldown] = useState(30) // Cooldown in seconds
  const [isResending, setIsResending] = useState(false)

  // Mutations
  const [confirmOTP, { isLoading }] =
    useConfirmOTPMutation()
  const [resendOTP] = useResendOTPMutation()

  // Handle OTP Input Change
  const handleInputChange = (e) => {
    setOtp(e.target.value)
  }

  // Handle OTP Submission
  const handleFormSubmit = async () => {
    if (!otp.trim()) {
      setError("Please enter a valid OTP.")
      return
    }

    try {
      const response = await confirmOTP({
        username: "jithu", // Replace with dynamic data if needed
        otp,
      }).unwrap()

      if (response?.status === "success") {
        console.log("OTP Verified Successfully!")
        navigate("/username")
      } else {
        setError("Invalid OTP. Please try again.")
      }
    } catch (err) {
      console.error("Error confirming OTP:", err)
      setError("Failed to confirm OTP. Please try again.")
    }
  }

  // Handle Resend OTP
  const handleResendOTP = async () => {
    setIsResending(true)

    try {
      const response = await resendOTP({
        username: "jithu", // Replace with dynamic data if needed
      }).unwrap()

      if (response?.status === "success") {
        console.log("OTP resent successfully!")
        setError("OTP has been resent. Check your inbox.")
        startCooldownTimer()
      } else {
        setError("Failed to resend OTP. Please try again.")
      }
    } catch (err) {
      console.error("Error resending OTP:", err)
      setError("Failed to resend OTP. Please try again.")
    } finally {
      setIsResending(false)
    }
  }

  // Start cooldown timer for resend OTP
  const startCooldownTimer = () => {
    setResendCooldown(30)
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"One More Step"} />
      <FormWrapper>
        <p className="text-sm text-muted text-center mb-6">
          Kindly enter the OTP sent to your mobile
          number/e-mail.
        </p>

        {/* OTP Input Field */}
        <InputField
          id={"otp"}
          label={"Enter your OTP"}
          type={"number"}
          placeholder={"Enter OTP here"}
          value={otp}
          onChange={handleInputChange}
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">
            {error}
          </p>
        )}

        {/* Submit OTP Button */}
        <Button
          onClick={handleFormSubmit}
          className={`w-full text-white py-2 rounded ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-secondary"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Verifying..." : "Submit"}
        </Button>

        {/* Resend OTP Button */}
        <div className="mt-4 text-center">
          {resendCooldown > 0 ? (
            <p className="text-sm text-muted">
              Resend OTP in {resendCooldown}s
            </p>
          ) : (
            <Button
              onClick={handleResendOTP}
              className={`text-blue text-sm ${
                isResending &&
                "opacity-50 cursor-not-allowed"
              }`}
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend OTP"}
            </Button>
          )}
        </div>
      </FormWrapper>
    </div>
  )
}

export default Otp
