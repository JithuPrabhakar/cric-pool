import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
