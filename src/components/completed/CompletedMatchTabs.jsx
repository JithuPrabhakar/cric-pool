import { useState } from 'react'
import Winnings from './Winnings'
import Leaderboard from './Leaderboard'
import Scorecard from './Scorecard'
import Commentary from './Commentary'
import Stats from './Stats'

const CompletedMatchTabs = () => {
  const [activeTab, setActiveTab] = useState('Winnings')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Winnings':
        return <Winnings />
      case 'Leaderboard':
        return <Leaderboard />
      case 'Scorecard':
        return <Scorecard />
      case 'Commentary':
        return <Commentary />
      case 'Stats':
        return <Stats />
      default:
        return null
    }
  }

  return (
    <div>
      <div className='bg-white border-b'>
        <div className='flex justify-around'>
          <button
            onClick={() => setActiveTab('Winnings')}
            className={`flex-1 text-center py-2 ${
              activeTab === 'Winnings'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            Winnings
          </button>
          <button
            onClick={() => setActiveTab('Leaderboard')}
            className={`flex-1 text-center py-2 ${
              activeTab === 'Leaderboard'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('Scorecard')}
            className={`flex-1 text-center py-2 ${
              activeTab === 'Scorecard'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            Scorecard
          </button>
          <button
            onClick={() => setActiveTab('Commentary')}
            className={`flex-1 text-center py-2 ${
              activeTab === 'Commentary'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            Commentary
          </button>
          <button
            onClick={() => setActiveTab('Stats')}
            className={`flex-1 text-center py-2 ${
              activeTab === 'Stats'
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500'
            }`}
          >
            Stats
          </button>
        </div>
      </div>

      <div>{renderTabContent()}</div>
    </div>
  )
}

export default CompletedMatchTabs
