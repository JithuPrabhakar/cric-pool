// Demo data
const winningsData = [
  { rank: 1, prize: '₹15 Lakhs' },
  { rank: 2, prize: '₹3.50 Lakhs' },
  { rank: 3, prize: '₹1.50 Lakhs' },
  { rank: 4, prize: '₹1 Lakh' },
  { rank: 5, prize: '₹50,000' },
  { rank: 6, prize: '₹20,000' },
  { rank: 7, prize: '₹15,000' },
  { rank: '8 - 9', prize: '₹10,000' },
  { rank: '10 - 12', prize: '₹8,000' },
  { rank: '13 - 16', prize: '₹5,000' },
  { rank: '17 - 21', prize: '₹2,500' },
]

const Winnings = () => {
  return (
    <div className='p-4'>
      {/* Prize Pool, Spots, and Entry Fee Section */}
      <div className='flex justify-between items-center mb-4 bg-primary-50 p-3 rounded-md shadow-sm'>
        <p className='text-primary-600 font-medium'>
          Prize Pool:{' '}
          <span className='font-semibold text-black'>₹3 Crores</span>
        </p>
        <p className='text-primary-600 font-medium'>
          Spots: <span className='font-semibold text-black'>10,68,376</span>
        </p>
        <p className='text-primary-600 font-medium'>
          Entry Fee: <span className='font-semibold text-black'>₹39</span>
        </p>
      </div>

      {/* Winnings List */}
      <div className='space-y-2'>
        <div className='flex justify-between items-center p-2'>
          <p className='text-primary-700 font-medium'>Rank</p>
          <p className='text-primary-700 font-medium'>Prize</p>
        </div>
        {winningsData.map((item, index) => (
          <div
            key={index}
            className='flex justify-between items-center px-2 pt-1 border-primary-50 border-t-2'
          >
            <p className='text-black'>{item.rank}</p>
            <p className='text-black'>{item.prize}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Winnings
