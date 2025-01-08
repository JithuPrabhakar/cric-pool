import InputField from './InputField'
import Button from './Button'
import FormWrapper from './FormWrapper'
import { NavLink } from 'react-router-dom'

const FormComponent = ({
  formType,
  title,
  buttonText,
  alternateText,
  redirectLink,
}) => {
  const isLogin = formType === 'login'

  return (
    <FormWrapper>
      <h2 className='text-center text-xl font-semibold text-gray-700 mb-8'>
        {title}
      </h2>
      <InputField
        id={isLogin ? 'emailOrPhone' : 'email'}
        label={isLogin ? 'Email or Phone' : 'Email Address'}
        type={isLogin ? 'text' : 'email'}
        placeholder={
          isLogin ? 'Enter your email or phone' : 'Enter your email address'
        }
      />
      {!isLogin && (
        <InputField
          id='phone'
          label='Phone Number'
          type='tel'
          placeholder='Enter your phone number'
        />
      )}
      <InputField
        id='password'
        label='Password'
        type='password'
        placeholder='Enter your password'
      />
      <Button className='w-full bg-primary-800 text-white hover:bg-primary-500'>
        {buttonText}
      </Button>
      <p className='text-center text-gray-500 text-sm mt-4'>
        {alternateText}{' '}
        <NavLink
          to={redirectLink}
          className='text-blue cursor-pointer text-md font-semibold'
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </NavLink>
      </p>
      {isLogin && (
        <p className='text-center text-gray-500 text-sm mt-4'>
          <NavLink
            to={'/forgot-password'}
            className='text-blue cursor-pointer text-md font-semibold'
          >
            Forgot Password
          </NavLink>
        </p>
      )}
    </FormWrapper>
  )
}

export default FormComponent
