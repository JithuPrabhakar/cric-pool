import { useState } from 'react'
import MatchesList from './MatchesList'

const MatchesTabs = () => {
  const [activeTab, setActiveTab] = useState('Upcoming')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Upcoming':
        return <MatchesList title={''} link={'upcoming'} />
      case 'Live':
        return <MatchesList title={''} link={'live'} />
      case 'Completed':
        return <MatchesList title={''} link={'completed'} />
      default:
        return null
    }
  }

  return (
    <div>
      <div className='flex justify-around border-b'>
        <button
          onClick={() => setActiveTab('Upcoming')}
          className={`flex-1 text-center py-2 ${
            activeTab === 'Upcoming'
              ? 'text-primary-500 border-b-2 border-primary-500'
              : 'text-gray-500'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab('Live')}
          className={`flex-1 text-center py-2 ${
            activeTab === 'Live'
              ? 'text-primary-500 border-b-2 border-primary-500'
              : 'text-gray-500'
          }`}
        >
          Live
        </button>
        <button
          onClick={() => setActiveTab('Completed')}
          className={`flex-1 text-center py-2 ${
            activeTab === 'Completed'
              ? 'text-primary-500 border-b-2 border-primary-500'
              : 'text-gray-500'
          }`}
        >
          Completed
        </button>
      </div>

      <div>{renderTabContent()}</div>
    </div>
  )
}

export default MatchesTabs
