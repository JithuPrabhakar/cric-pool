import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const WalletPage = () => {
  const [amount, setAmount] = useState('')
  const navigate = useNavigate()

  const handleAddCash = () => {
    if (amount) {
      console.log(`Adding ₹${amount} to balance`)
      navigate('/payment-options')
    } else {
      alert('Please enter a valid amount')
    }
  }

  return (
    <div className='min-h-screen p-4'>
      <h1 className='text-lg font-bold mb-4'>Add Cash</h1>
      <div className='bg-white p-4 rounded shadow-md'>
        <div className='flex items-center justify-between mb-4'>
          <span>Current Balance</span>
          <span>₹0</span>
        </div>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='Amount to add'
          className='border w-full p-2 rounded mb-4'
        />
        <div className='flex gap-2 mb-4'>
          {[10, 40, 100].map((amt) => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className='px-4 py-2 border rounded hover:bg-gray-100'
            >
              ₹{amt}
            </button>
          ))}
        </div>
        <button
          disabled={amount === 0}
          onClick={handleAddCash}
          className={`w-full py-2 rounded text-white ${
            amount === 0
              ? 'bg-primary-200 cursor-not-allowed'
              : 'bg-primary-500 hover:bg-primary-700'
          }`}
        >
          Add ₹{amount || 0}
        </button>
      </div>
      <div className='mt-6'>
        <h2 className='text-sm font-bold mb-2'>Payment Offers</h2>
        <div className='bg-white p-4 rounded shadow-md'>
          <div className='mb-4'>
            <h3 className='font-semibold'>20% Discount Bonus</h3>
            <p className='text-sm'>Ends in 3 | Max bonus ₹2500</p>
            <button className='text-blue-500 text-sm'>Apply</button>
          </div>
          <div>
            <h3 className='font-semibold'>10% Discount Bonus</h3>
            <p className='text-sm'>Ends in 3 | Max bonus ₹2500</p>
            <button className='text-blue-500 text-sm'>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletPage
