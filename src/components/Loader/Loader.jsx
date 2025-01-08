const Loader = () => {
  return (
    <div
      className='flex items-center justify-center h-screen bg-gradient-to-br 
                from-primary-500 via-russian-violet to-black'
    >
      <div
        className='flex items-center justify-center rounded-full bg-white 
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-pulse'
      >
        {/* Placeholder for the logo icon */}
        <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-white rounded-full border-4 border-primary-600'></div>
      </div>
    </div>
  )
}

export default Loader
