import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Devs from './pages/Devs'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import CreateTeam from './pages/CreateTeam'
import ForgotPassword from './pages/ForgotPassword'
import EditProfile from './pages/EditProfile'
import Commentary from './pages/Commentary'
import Scorecard from './pages/Scorecard'
import SelectSquad from './pages/SelectSquad'
import WinningCashDetails from './pages/WinningCashDetails'
import Stats from './pages/Stats'
// import Navbar from './components/Navbar/Navbar'
import background from './assets/background.jpg'
import EnterOtp from './pages/EnterOtp'
import EnterName from './pages/EnterName'
import GetStarted from './pages/GetStarted'
import Profile from './pages/Profile'
import MyMatches from './pages/MyMatches'
import NotificationsPage from './pages/NotificationsPage'

function App() {
  return (
    <Router>
      <div
        className='min-h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <Navbar />*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/get-started' element={<GetStarted />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/create-team' element={<CreateTeam />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-matches' element={<MyMatches />} />
          <Route path='/notifications' element={<NotificationsPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/enter-otp' element={<EnterOtp />} />
          <Route path='/enter-name' element={<EnterName />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/commentary' element={<Commentary />} />
          <Route path='/scorecard' element={<Scorecard />} />
          <Route path='/select-squad' element={<SelectSquad />} />
          <Route
            path='/winning-cash-details'
            element={<WinningCashDetails />}
          />
          <Route path='/stats' element={<Stats />} />
          <Route path='/humans' element={<Devs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
