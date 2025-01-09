import Button from '../components/Login-Signup/Button'
import FormWrapper from '../components/Login-Signup/FormWrapper'
import Header from '../components/Login-Signup/Header'
import InputField from '../components/Login-Signup/InputField'

const EnterName = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Header title={'You are all set'} />
      <FormWrapper>
        <p className='text-sm text-gray-600 text-center mb-6'>
          Enter your name and you are all set to play.
        </p>
        <InputField
          id={'name'}
          label={'Name'}
          type={'text'}
          placeholder={'Enter your name'}
        />
        <Button className='w-full bg-primary-800 text-white hover:bg-primary-500'>
          Save
        </Button>
      </FormWrapper>
    </div>
  )
}

export default EnterName
