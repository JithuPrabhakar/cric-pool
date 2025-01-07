const Wallet = () => {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <h1 className='text-xl font-bold mb-6'>My Wallet</h1>
      <div className='bg-white rounded-md shadow p-4 mb-6'>
        <p className='text-sm font-semibold mb-2'>Current Balance: ₹500</p>
        <button className='bg-primary-500 text-white py-2 w-full rounded-md font-semibold hover:bg-primary-600'>
          Add Money
        </button>
      </div>

      <h2 className='text-lg font-semibold mb-4'>Transaction History</h2>
      <div className='space-y-4'>
        {[
          { date: '2025-01-05', description: 'Added ₹500', amount: '+₹500' },
          {
            date: '2025-01-04',
            description: 'Contest Entry Fee',
            amount: '-₹49',
          },
        ].map((transaction, index) => (
          <div
            key={index}
            className='bg-white rounded-md shadow p-4 flex justify-between'
          >
            <div>
              <p className='text-sm font-semibold'>{transaction.description}</p>
              <p className='text-xs text-gray-500'>{transaction.date}</p>
            </div>
            <p
              className={`font-semibold ${
                transaction.amount.startsWith('+')
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wallet
