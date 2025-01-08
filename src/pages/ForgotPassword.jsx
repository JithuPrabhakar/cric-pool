import Button from '../components/Login-Signup/Button'
import FormWrapper from '../components/Login-Signup/FormWrapper'
import Header from '../components/Login-Signup/Header'
import InputField from '../components/Login-Signup/InputField'

const ForgotPassword = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header title={'Forgot Password'} />
      <FormWrapper>
        <p className='text-sm text-gray-600 text-center mb-6'>
          Enter your email or phone number to reset your password.
        </p>
        <InputField
          id={'emailOrPhone'}
          label={'Email or Phone'}
          type={'text'}
          placeholder={'Enter your email or phone'}
        />
        <Button className='w-full bg-primary-800 text-white hover:bg-primary-500'>
          Send Reset Link
        </Button>
      </FormWrapper>
    </div>
  )
}

export default ForgotPassword
