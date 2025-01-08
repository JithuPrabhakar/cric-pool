import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import Header from '../components/Login-Signup/Header'
import FormComponent from '../components/Login-Signup/FormComponent'

const Login = () => {
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
      <Header title={'Login to your account'} />
      <FormComponent
        formType='login'
        title='Welcome Back!'
        buttonText='Login'
        alternateText="Don't have an account?"
        redirectLink='/signup'
      />
    </div>
  )
}

export default Login
