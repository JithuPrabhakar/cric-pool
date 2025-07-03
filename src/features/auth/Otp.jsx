import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
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
  const location = useLocation()

  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [resendCooldown, setResendCooldown] = useState(30)
  const [isResending, setIsResending] = useState(false)

  const username = location.state?.username || ""
  console.log("Username from state:", username)

  const [confirmOTP, { isLoading }] =
    useConfirmOTPMutation()
  const [resendOTP] = useResendOTPMutation()

  const handleInputChange = (e) => {
    setOtp(e.target.value)
  }

  const handleFormSubmit = async () => {
    if (!otp.trim()) {
      setError("Please enter a valid OTP.")
      return
    }

    try {
      const res = await confirmOTP({
        username,
        otp,
      }).unwrap()
      const status = res?.[0]

      if (status?.StatusCode === 0) {
        setSuccess("OTP Verified Successfully!")
        setError("")
        setTimeout(() => navigate("/login"), 1000)
      } else {
        setError(status?.Message || "Invalid OTP.")
        setSuccess("")
      }
    } catch (err) {
      console.error("Error confirming OTP:", err)
      setError("Something went wrong. Please try again.")
      setSuccess("")
    }
  }

  const handleResendOTP = async () => {
    setIsResending(true)
    try {
      const res = await resendOTP({ username }).unwrap()
      const status = res?.[0]

      if (status?.StatusCode === 0) {
        setSuccess("OTP has been resent successfully.")
        setError("")
        startCooldownTimer()
      } else {
        setError(status?.Message || "Failed to resend OTP.")
        setSuccess("")
      }
    } catch (err) {
      console.error("Error resending OTP:", err)
      setError("Failed to resend OTP. Please try again.")
      setSuccess("")
    } finally {
      setIsResending(false)
    }
  }

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

  // ✅ Auto-clear error/success messages
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("")
        setSuccess("")
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, success])

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"One More Step"} />
      <FormWrapper>
        <p className="text-sm text-muted text-center mb-6">
          Kindly enter the OTP sent to your mobile
          number/e-mail.
        </p>

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
        {success && (
          <p className="text-green-500 text-sm text-center mb-2">
            {success}
          </p>
        )}

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

        <div className="mt-4 text-center">
          {resendCooldown > 0 ? (
            <p className="text-sm text-muted">
              Resend OTP in {resendCooldown}s
            </p>
          ) : (
            <Button
              onClick={handleResendOTP}
              className={`text-blue text-sm ${
                isResending
                  ? "opacity-50 cursor-not-allowed"
                  : ""
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
