import Button from '../components/start/Button'
import FormWrapper from '../components/start/FormWrapper'
import InputField from '../components/start/InputField'
import Top from '../components/start/Top'

const OtpPage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Top title={'One More Step'} />
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

export default OtpPage
