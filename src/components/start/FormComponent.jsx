import InputField from "./InputField"
import Button from "./Button"
import FormWrapper from "./FormWrapper"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const FormComponent = ({
  formType,
  title,
  buttonText,
  alternateText,
  redirectLink,
  onSubmit,
  errors = {}, // ✅ NEW: errors prop from parent
}) => {
  const [formData, setFormData] = useState({
    name: "",
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
    onSubmit(formData) // Let parent validate and handle errors
  }

  const isLogin = formType === "login"

  return (
    <FormWrapper>
      <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
        {title}
      </h2>

      {/* Full Name Input Field */}
      {!isLogin && (
        <>
          <InputField
            id="name"
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name}
            </p>
          )}
        </>
      )}

      {/* Username Input Field */}
      <>
        <InputField
          id="username"
          label="Phone number"
          type="number"
          placeholder="Enter your phone number"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">
            {errors.username}
          </p>
        )}
      </>

      {/* Password Input Field */}
      <>
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">
            {errors.password}
          </p>
        )}
      </>

      {/* Confirm Password Input (Only for Register) */}
      {!isLogin && (
        <>
          <InputField
            id="confirm-password"
            label="Confirm your Password"
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </>
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
