import { useState } from 'react'

const Header = ({ title, onBack }) => (
  <div className='flex items-center bg-transparent text-white p-4'>
    <button onClick={onBack} className='mr-4 text-lg'>
      ←
    </button>
    <h1 className='text-xl font-semibold'>{title}</h1>
  </div>
)

const TabNavigation = ({ activeTab, onTabChange }) => (
  <div className='flex justify-between bg-white shadow-md rounded-t-lg'>
    {['All', 'Offers'].map((tab) => (
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

const NotificationItem = ({ title, description, timeAgo, icon }) => (
  <div className='flex items-start bg-white p-4 shadow-sm border-b'>
    <img src={icon} alt='Notification Icon' className='w-10 h-10 mr-4' />
    <div className='flex-1'>
      <h3 className='font-bold text-black'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
      <p className='text-xs text-gray-400'>{timeAgo}</p>
    </div>
  </div>
)

const NotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('All')

  const notifications = {
    All: [
      {
        title: '100% UNLOCKED 🎉',
        description:
          'Congratulations sukumaran! Use your discount and join your favourite contests 😎',
        timeAgo: '13 mins ago',
        icon: 'https://via.placeholder.com/40', // Replace with actual icon
      },
      {
        title: '100% UNLOCKED 🎉',
        description:
          'Congratulations sukumaran! Use your discount and join your favourite contests 😎',
        timeAgo: '21 hours ago',
        icon: 'https://via.placeholder.com/40', // Replace with actual icon
      },
    ],
    Offers: [
      {
        title: '100% UNLOCKED 🎉',
        description:
          'Congratulations sukumaran! Use your discount and join your favourite contests 😎',
        timeAgo: '13 mins ago',
        icon: 'https://via.placeholder.com/40', // Replace with actual icon
      },
      {
        title: '100% UNLOCKED 🎉',
        description:
          'Congratulations sukumaran! Use your discount and join your favourite contests 😎',
        timeAgo: '21 hours ago',
        icon: 'https://via.placeholder.com/40', // Replace with actual icon
      },
    ],
  }

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <Header title='Notifications' onBack={() => alert('Go Back')} />

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Notifications List */}
      <div>
        {notifications[activeTab].map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            description={notification.description}
            timeAgo={notification.timeAgo}
            icon={notification.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default NotificationsPage
