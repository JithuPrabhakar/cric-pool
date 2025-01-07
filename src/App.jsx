import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Devs from './pages/Devs'
import Dashboard from './pages/Dashboard'
import Leaderboard from './pages/Leaderboard'
import CreateTeam from './pages/CreateTeam'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/createteam' element={<CreateTeam />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/humans' element={<Devs />} />
      </Routes>
    </Router>
  )
}

export default App
