import { useState } from 'react'
import Winnings from './Winnings'
import Stats from './Stats'

const UpcomingTabs = () => {
  const [activeTab, setActiveTab] = useState('Winnings')

  return (
    <div className='mt-4'>
      <div className='flex border-b'>
        <button
          className={`flex-1 p-2 text-center font-medium ${
            activeTab === 'Winnings'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Winnings')}
        >
          Winnings
        </button>
        <button
          className={`flex-1 p-2 text-center font-medium ${
            activeTab === 'Stats'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('Stats')}
        >
          Stats
        </button>
      </div>
      <div className='p-4'>
        {activeTab === 'Winnings' && <Winnings />}
        {activeTab === 'Stats' && <Stats />}
      </div>
    </div>
  )
}

export default UpcomingTabs
