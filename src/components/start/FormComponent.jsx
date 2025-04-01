import InputField from "./InputField"
import Button from "./Button"
import FormWrapper from "./FormWrapper"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"

const FormComponent = ({
  formType,
  title,
  buttonText,
  alternateText,
  redirectLink,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.username || !formData.password) {
      alert("Please fill in all required fields.")
      return
    }

    if (
      formType === "register" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match.")
      return
    }

    onSubmit(formData) // Pass data to parent component for API call
  }

  const isLogin = formType === "login"

  return (
    <FormWrapper>
      <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
        {title}
      </h2>

      {/* Full Name Input Field */}
      {!isLogin && (
        <InputField
          id="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      )}

      {/* Username Input Field */}
      <InputField
        id="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      {/* Password Input Field */}
      <InputField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Confirm Password Input (Only for Register) */}
      {!isLogin && (
        <InputField
          id="confirm-password"
          label="Confirm your Password"
          type="password"
          placeholder="Confirm your password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      )}

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full bg-primary text-white hover:bg-secondary"
      >
        {buttonText}
      </Button>

      {/* Alternate Text */}
      <p className="text-center text-black text-sm mt-4">
        {alternateText}{" "}
        <NavLink
          to={redirectLink}
          className="text-blue cursor-pointer text-md font-semibold"
        >
          {isLogin ? "Sign Up" : "Login"}
        </NavLink>
      </p>

      {/* Forgot Password Link */}
      {isLogin && (
        <p className="text-center text-muted text-sm mt-4">
          <NavLink
            to="/forgot-password"
            className="text-blue cursor-pointer text-md font-semibold"
          >
            Forgot Password
          </NavLink>
        </p>
      )}
    </FormWrapper>
  )
}

export default FormComponent
