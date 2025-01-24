// import Header from '../components/Login-Signup/Header'

const ProfilePage = () => {
  return (
    <div className='min-h-screen'>
      {/* Header */}
      {/* <Header title={''} /> */}

      {/* Profile Section */}
      <div className='p-4 bg-gray-200 rounded-lg'>
        {/* Profile Info */}
        <div className='bg-white rounded-lg shadow-md p-4'>
          {/* Profile Image */}
          <div className='mx-auto w-24 h-24 bg-gray-300 rounded-full border-4 border-white'>
            {/* Add Profile Picture */}
          </div>
          {/* Profile Details */}
          <div className='mt-4 text-center'>
            <h2 className='text-xl font-bold'>UserName</h2>
            <p className='text-sm text-gray-500'>Full Name</p>
            <p className='mt-2 font-semibold text-primary-600'>
              Skill Score: 630
            </p>
          </div>
          {/* Followers and Friends */}
          <div className='mt-4 flex justify-around text-center'>
            <div>
              <p className='text-lg font-bold'>10</p>
              <p className='text-sm text-gray-500'>Followers</p>
            </div>
            <div>
              <p className='text-lg font-bold'>10</p>
              <p className='text-sm text-gray-500'>Following</p>
            </div>
            <div>
              <p className='text-lg font-bold'>9</p>
              <p className='text-sm text-gray-500'>Friends</p>
            </div>
          </div>
        </div>

        {/* Champions Club Section */}
        <div className='bg-white rounded-lg shadow-md p-4 mt-4'>
          <h3 className='text-sm font-bold mb-2'>Champions Club</h3>
          <div className='bg-gray-200 rounded-lg p-3 flex items-center'>
            <img
              src='/path/to/legend-image.png'
              alt='Champions Club'
              className='w-16 h-16'
            />
            <div className='ml-4 flex-1'>
              <p className='text-sm font-semibold'>Enter the Champions Club</p>
              <p className='text-xs text-gray-500'>
                Earn DreamCoins to get exclusive benefits
              </p>
              <div className='mt-2 bg-gray-300 rounded-full h-2 w-full'>
                <div
                  className='bg-primary-600 h-2 rounded-full'
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Score and Career Stats */}
        <div className='bg-white rounded-lg shadow-md p-4 mt-4'>
          <div className='flex justify-between items-center'>
            {/* Skill Score */}
            <div className='text-center'>
              <h4 className='text-lg font-bold'>Skill Score</h4>
              <div className='text-2xl font-extrabold mt-2'>630</div>
              <p className='text-xs text-primary-500 mt-1'>
                View for all sports
              </p>
            </div>
            {/* Career Stats */}
            <div>
              <h4 className='text-lg font-bold'>Career Stats</h4>
              <div className='mt-2 space-y-1'>
                <p className='text-sm'>
                  Contests: <span className='font-semibold'>960</span>
                </p>
                <p className='text-sm'>
                  Matches: <span className='font-semibold'>166</span>
                </p>
                <p className='text-sm'>
                  Series: <span className='font-semibold'>42</span>
                </p>
                <p className='text-sm'>
                  Sports: <span className='font-semibold'>5</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recently Played */}
        <div className='bg-white rounded-lg shadow-md p-4 mt-4'>
          <h3 className='text-sm font-bold mb-3'>Recently Played</h3>
          {/* Match Card */}
          <div className='bg-gray-100 rounded-md p-3 mb-3'>
            <div className='flex justify-between items-center'>
              <h4 className='text-sm font-bold'>KKR vs PBKS</h4>
              <p className='text-xs text-gray-500'>Cricket</p>
            </div>
            <p className='text-xs text-gray-500'>PBKS beat KKR by 8 wickets</p>
            <p className='text-xs text-gray-500'>Apr 26, 2024</p>
            <div className='mt-2 text-sm'>
              <p>
                Highest Points:{' '}
                <span className='font-semibold'>856.5 (T1)</span>
              </p>
              <p>
                Dream Team: <span className='font-semibold'>1119.5pts</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
