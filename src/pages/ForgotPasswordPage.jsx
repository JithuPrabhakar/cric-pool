import Button from '../components/start/Button'
import FormWrapper from '../components/start/FormWrapper'
import InputField from '../components/start/InputField'
import Top from '../components/start/Top'

const ForgotPasswordPage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Top title={'Forgot Password'} />
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

export default ForgotPasswordPage
