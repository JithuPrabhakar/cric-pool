import { useEffect, useState } from 'react'

import Loader from '../components/loader/Loader'
import FormComponent from '../components/start/FormComponent'
import Top from '../components/start/Top'

const LoginPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer) // Cleanup timer
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Top title={'Login to your account'} />
      <FormComponent
        formType='login'
        title='Welcome Back!'
        buttonText='Login'
        alternateText="Don't have an account?"
        redirectLink='/register'
      />
    </div>
  )
}

export default LoginPage
