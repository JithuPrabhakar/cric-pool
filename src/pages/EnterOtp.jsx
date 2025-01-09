import Button from '../components/Login-Signup/Button'
import FormWrapper from '../components/Login-Signup/FormWrapper'
import Header from '../components/Login-Signup/Header'
import InputField from '../components/Login-Signup/InputField'

const EnterOtp = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header title={'One More Step'} />
      <FormWrapper>
        <p className='text-sm text-gray-600 text-center mb-6'>
          Kindly enter the OTP sent to your mobile number/e-mail.
        </p>
        <InputField
          id={'otp'}
          label={'Enter your OTP'}
          type={'number'}
          placeholder={'Enter OTP here'}
        />
        <Button className='w-full bg-primary-800 text-white hover:bg-primary-500'>
          Submit
        </Button>
      </FormWrapper>
    </div>
  )
}

export default EnterOtp
