import { NavLink } from 'react-router-dom'

const UpcomingHeader = () => {
  return (
    <div className='p-4 rounded-lg bg-primary-50'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-sm font-medium'>Guaranteed plus Prize Pool</p>
          <p className='text-lg font-bold text-primary-600'>₹26 Lakhs</p>
        </div>
        <div className='text-right'>
          <p className='text-sm font-medium'>Max Prize Pool</p>
          <p className='text-lg font-bold'>₹29.90 Lakhs</p>
        </div>
      </div>
      <div className='my-2'>
        <p className='text-sm'>67,997 Left</p>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-primary-600 h-2 rounded-full'
            style={{ width: '60%' }}
          ></div>
        </div>
        <p className='text-sm text-right mt-1'>71,704 Spots</p>
      </div>
      <NavLink to={'/create-team'}>
        <button className='w-full bg-primary-600 text-white py-2 rounded hover:bg-primary-700'>
          JOIN MATCH
        </button>
      </NavLink>
    </div>
  )
}

export default UpcomingHeader
