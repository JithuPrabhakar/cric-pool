import TopNavbar from '../components/Navbars/TopNavbar'
// import SportsTabs from '../components/Navbars/SportsTabs'
import MatchTabs from '../components/Navbars/MatchTabs'
import BottomNavbar from '../components/Navbars/BottomNavbar'

const MyMatches = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Fixed Top Navbar */}
      <TopNavbar title='My Matches' />

      {/* Sports Tabs */}
      {/* <div className='bg-white shadow-md'>
        <SportsTabs />
      </div> */}

      {/* Match State Tabs */}
      <div className='shadow-sm'>
        <MatchTabs />
      </div>

      {/* Fixed Bottom Navbar */}
      <BottomNavbar />
    </div>
  )
}

export default MyMatches
