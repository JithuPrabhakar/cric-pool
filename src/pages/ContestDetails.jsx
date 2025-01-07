const ContestDetails = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>Available Contests</h1>
      <div className='space-y-4'>
        {[
          { name: 'Mega Contest', prize: '₹10,00,000', fee: '₹49' },
          { name: 'Head-to-Head', prize: '₹5,000', fee: '₹100' },
          { name: 'Small League', prize: '₹50,000', fee: '₹25' },
        ].map((contest, index) => (
          <div
            key={index}
            className='bg-white rounded-md shadow p-4 flex justify-between items-center'
          >
            <div>
              <p className='text-sm font-semibold'>{contest.name}</p>
              <p className='text-xs text-gray-500'>Prize: {contest.prize}</p>
              <p className='text-xs text-gray-500'>Entry Fee: {contest.fee}</p>
            </div>
            <button className='bg-primary-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-primary-600'>
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContestDetails
