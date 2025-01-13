const TopNavbar = ({ title }) => {
  return (
    <div className='fixed top-4 left-0 w-full bg-transparent text-white shadow-md z-10'>
      <div className='flex items-center justify-between px-4 py-2'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <img
          src='/path/to/profile-icon.png'
          alt='Profile'
          className='w-8 h-8 rounded-full'
        />
      </div>
    </div>
  )
}

export default TopNavbar
