const Commentary = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-xl font-bold mb-6'>Live Commentary</h1>
      <div className='space-y-4'>
        {[
          { time: '10:30 AM', text: 'Player X hits a six!' },
          { time: '10:31 AM', text: 'Player Y takes a wicket!' },
          { time: '10:32 AM', text: 'Team Z scores 10 runs in an over.' },
        ].map((comment, index) => (
          <div
            key={index}
            className='bg-white rounded-md shadow p-4 flex justify-between'
          >
            <p className='text-sm'>{comment.text}</p>
            <p className='text-xs text-gray-500'>{comment.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Commentary
