const FormWrapper = ({ children }) => {
  return (
    <div className='w-full h-screen py-8 px-12 bg-white rounded-2xl sm:mt-24 sm:w-[640px] sm:h-fit'>
      {children}
    </div>
  )
}

export default FormWrapper
