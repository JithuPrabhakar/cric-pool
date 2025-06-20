import { useNavigate } from "react-router-dom"
import { useSignUpUserMutation } from "../api/apiSlice"
import Top from "../../components/start/Top"
import FormComponent from "../../components/start/FormComponent"

const Register = () => {
  const navigate = useNavigate()
  const [signUpUser, { isLoading, isError, error }] =
    useSignUpUserMutation()

  const handleRegister = async (formData) => {
    console.log(formData)
    if (
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill in all fields.")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    try {
      const result = await signUpUser({
        name: formData.name,
        username: formData.username,
        password: formData.password,
      }).unwrap()

      if (result) {
        console.log("Registration Successful:", result)
        navigate("/otp") // Navigate to OTP page for confirmation
      }
    } catch (err) {
      console.error(
        "Registration Failed:",
        err.data || "Unknown error"
      )
    }
  }

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Top title={"Create a new account"} />
      <FormComponent
        formType="register"
        title="Sign Up to Play"
        buttonText={
          isLoading ? "Creating Account..." : "Sign Up"
        }
        alternateText="Already have an account?"
        redirectLink="/login"
        onSubmit={handleRegister}
      />
      {isError && (
        <p className="text-red-500 mt-4">
          {error?.data ||
            "Registration failed. Please try again."}
        </p>
      )}
    </div>
  )
}

export default Register
