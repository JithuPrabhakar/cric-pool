import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
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
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/create-team' element={<CreateTeam />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/humans' element={<Devs />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/commentary' element={<Commentary />} />
        <Route path='/scorecard' element={<Scorecard />} />
        <Route path='/select-squad' element={<SelectSquad />} />
        <Route path='/winning-cash-details' element={<WinningCashDetails />} />
        <Route path='/stats' element={<Stats />} />
      </Routes>
    </Router>
  )
}

export default App
