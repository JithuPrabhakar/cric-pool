import Button from '../components/start/Button'
import FormWrapper from '../components/start/FormWrapper'
import InputField from '../components/start/InputField'
import Top from '../components/start/Top'

const UserNamePage = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <Top title={'You are all set'} />
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

export default UserNamePage
