const ForgotPassword = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-96 bg-white p-6 rounded-md shadow-md'>
        <h2 className='text-xl font-bold text-center mb-4'>Forgot Password</h2>
        <p className='text-sm text-gray-600 text-center mb-6'>
          Enter your email or phone number to reset your password.
        </p>
        <input
          type='text'
          placeholder='Email or Phone'
          className='w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-primary-500'
        />
        <button className='w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600'>
          Send Reset Link
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword
