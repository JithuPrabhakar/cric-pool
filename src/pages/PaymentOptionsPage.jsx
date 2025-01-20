const PaymentOptionsPage = () => {
  return (
    <div className='min-h-screen p-4'>
      <h1 className='text-lg font-bold mb-4'>Payment Options</h1>
      <div className='bg-white p-4 rounded shadow-md'>
        <h2 className='text-sm font-bold mb-2'>Payment Offers</h2>
        <div className='flex justify-between items-center mb-4'>
          <div>
            <h3 className='font-semibold'>Amazon Pay UPI</h3>
            <p className='text-sm'>Up to ₹25 Cashback</p>
          </div>
          <button className='text-blue-500 text-sm'>Apply</button>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='font-semibold'>CRED UPI</h3>
            <p className='text-sm'>Up to ₹300 Cashback</p>
          </div>
          <button className='text-blue-500 text-sm'>Apply</button>
        </div>
      </div>
      <div className='mt-6 bg-white p-4 rounded shadow-md'>
        <h2 className='text-sm font-bold mb-2'>Preferred Payment</h2>
        <div className='flex flex-col gap-2'>
          <button className='flex items-center justify-between border p-2 rounded'>
            <span>Google Pay</span>
            <span className='text-primary-500'>Add</span>
          </button>
          <button className='flex items-center justify-between border p-2 rounded'>
            <span>PhonePe</span>
            <span className='text-primary-500'>Add</span>
          </button>
          <button className='flex items-center justify-between border p-2 rounded'>
            <span>Amazon Pay</span>
            <span className='text-primary-500'>₹4.0</span>
          </button>
        </div>
      </div>
      <div className='mt-6 bg-white p-4 rounded shadow-md'>
        <h2 className='text-sm font-bold mb-2'>Pay by any UPI App</h2>
        <div className='grid grid-cols-4 gap-2'>
          {['CRED UPI', 'PayTM UPI', 'WhatsApp UPI', 'Fi UPI'].map(
            (app, index) => (
              <button
                key={index}
                className='flex items-center justify-center border p-2 rounded text-center'
              >
                {app}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PaymentOptionsPage
