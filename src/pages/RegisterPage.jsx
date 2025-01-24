// import { useEffect, useState } from 'react'
// import Loader from '../components/loader/Loader'
import Top from '../components/start/Top'
import FormComponent from '../components/start/FormComponent'

const RegisterPage = () => {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 2000)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Top title={'Create a new account'} />
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

export default RegisterPage
