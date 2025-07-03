import { useState, useEffect, useRef } from "react"

const OtpInputBox = ({ length = 6, onChange }) => {
  const [otpValues, setOtpValues] = useState(
    Array(length).fill("")
  )
  const inputsRef = useRef([])

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "") // Allow only digits

    if (!val) return

    const updatedOtp = [...otpValues]
    updatedOtp[index] = val
    setOtpValues(updatedOtp)

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault()
      const updatedOtp = [...otpValues]

      if (updatedOtp[index]) {
        updatedOtp[index] = ""
      } else if (index > 0) {
        updatedOtp[index - 1] = ""
        inputsRef.current[index - 1]?.focus()
      }

      setOtpValues(updatedOtp)
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
    const updatedOtp = [...otpValues]

    for (let i = 0; i < length; i++) {
      updatedOtp[i] = pastedData[i] || ""
    }

    setOtpValues(updatedOtp)

    const nextEmpty = updatedOtp.findIndex((val) => !val)
    inputsRef.current[
      nextEmpty === -1 ? length - 1 : nextEmpty
    ]?.focus()
  }

  useEffect(() => {
    onChange(otpValues.join(""))
  }, [otpValues, onChange])

  return (
    <div
      className="flex gap-2 justify-center"
      onPaste={handlePaste}
    >
      {otpValues.map((value, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-12 text-center border border-gray-300 rounded text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  )
}

export default OtpInputBox
