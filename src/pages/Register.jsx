const Register = () => {
  return (
    <div className='w-96 mx-auto'>
      <div className='bg-green-500 text-white flex gap-8 items-center px-6 py-2'>
        <button className='border border-1 px-2 py-1 rounded-md text-sm'>
          Go Back
        </button>
        <h2 className='font-semibold'>SIGN UP TO PLAY</h2>
      </div>
      <div className='p-4 rounded-md shadow-lg w-[22rem] mx-auto'>
        <div></div>
        <p className='text-center mb-4'>Or sign up with</p>
        <div className='flex gap-4'>
          <button className='shadow-md py-2 w-full text-blue-600 font-semibold'>
            Facebook
          </button>
          <button className='shadow-md py-2 w-full font-semibold'>
            Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
