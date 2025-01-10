import { useState } from 'react'

// Reusable Tab Navigation Component
const TabNavigation = ({ tabs, activeTab, onTabChange }) => (
  <div className='flex justify-around bg-white shadow-md rounded-lg'>
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`flex-1 py-2 text-center font-medium ${
          activeTab === tab
            ? 'border-b-4 border-primary-400 text-primary-400'
            : 'text-gray-500'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
)

// Reusable MatchCard Component
const MatchCard = ({ match }) => (
  <div className='flex flex-col bg-white shadow-md p-4 mb-4 border rounded-md'>
    <h3 className='font-bold text-lg text-gray-700'>
      {match.team1} vs {match.team2}
    </h3>
    <p className='text-sm text-gray-600'>Status: {match.status}</p>
    <p className='text-sm text-gray-600'>{match.date}</p>
    {match.result && (
      <p className='text-sm text-green-600 font-medium'>{match.result}</p>
    )}
    <button className='mt-2 py-2 px-4 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-500'>
      View Details
    </button>
  </div>
)

// Main MatchTabs Component
const MatchTabs = () => {
  const [activeTab, setActiveTab] = useState('Upcoming')

  // Mock data for each tab
  const matchData = {
    Upcoming: [
      {
        team1: 'Team A',
        team2: 'Team B',
        date: 'Jan 12, 2025',
        status: 'Upcoming',
      },
      {
        team1: 'Team C',
        team2: 'Team D',
        date: 'Jan 13, 2025',
        status: 'Upcoming',
      },
    ],
    Live: [
      { team1: 'Team E', team2: 'Team F', date: 'Live Now', status: 'Live' },
      { team1: 'Team G', team2: 'Team H', date: 'Live Now', status: 'Live' },
    ],
    Completed: [
      {
        team1: 'Team I',
        team2: 'Team J',
        date: 'Jan 10, 2025',
        status: 'Completed',
        result: 'Team I won by 5 wickets',
      },
      {
        team1: 'Team K',
        team2: 'Team L',
        date: 'Jan 9, 2025',
        status: 'Completed',
        result: 'Team K won by 20 runs',
      },
    ],
  }

  return (
    <div className='min-h-screen mt-16 bg-white rounded-lg'>
      {/* Tab Navigation */}
      <TabNavigation
        tabs={['Upcoming', 'Live', 'Completed']}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Tab Content */}
      <div className='p-4'>
        {matchData[activeTab].length > 0 ? (
          matchData[activeTab].map((match, index) => (
            <MatchCard key={index} match={match} />
          ))
        ) : (
          <p className='text-center text-gray-600 mt-4'>No matches found.</p>
        )}
      </div>
    </div>
  )
}

export default MatchTabs
