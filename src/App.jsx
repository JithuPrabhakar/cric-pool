import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* Just a sample comment */}
      </Routes>
    </Router>
  )
}

export default App
