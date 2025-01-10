import { NavLink } from 'react-router-dom'

const BottomNavbar = () => {
  const navItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'My Matches', path: '/matches', icon: '🎯' },
    { label: 'Rewards', path: '/rewards', icon: '🎁' },
    { label: 'Gurus', path: '/gurus', icon: '📚' },
  ]

  return (
    <div className='fixed bottom-0 left-0 w-full bg-primary-100 shadow-md z-10'>
      <div className='flex justify-around'>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className='flex flex-col items-center py-2'
            activeClassName='text-red-600'
          >
            <span className='text-lg'>{item.icon}</span>
            <span className='text-xs'>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BottomNavbar
