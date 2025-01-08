import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Header from '../components/Login-Signup/Header'
import FormComponent from '../components/Login-Signup/FormComponent'

const Register = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer) // Cleanup timer
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header title={'Create a new account'} />
      <FormComponent
        formType='register'
        title='Sign Up to Play'
        buttonText='Sign Up'
        alternateText='Already have an account?'
        redirectLink='/login'
      />
    </div>
  )
}

export default Register
