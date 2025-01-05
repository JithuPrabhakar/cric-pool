import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        {/* Just a sample comment */}
      </Routes>
    </Router>
  )
}

export default App
