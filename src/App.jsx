import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import background from './assets/background.jpg'

import LayoutRoute from './components/layout/LayoutRoute'
import GetStartedPage from './pages/GetStartedPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MyMatchesPage from './pages/MyMatchesPage'
import InternationalMatchesPage from './pages/InternationalMatchesPage'
import OtpPage from './pages/OtpPage'
import UserNamePage from './pages/UserNamePage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import PredictionsPage from './pages/PredictionsPage'
import CompletedMatchPage from './pages/CompletedMatchPage'
import WalletPage from './pages/WalletPage'
import PaymentOptionsPage from './pages/PaymentOptionsPage'
import ProfilePage from './pages/ProfilePage'
import NotificationsPage from './pages/NotificationsPage'
import UpcomingMatchPage from './pages/UpcomingMatchPage'
import CreateTeamPage from './pages/CreateTeamPage'

const App = () => {
  return (
    <Router>
      <div
        className='min-h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${background})` }}
      >
        <Routes>
          {/* Pages without Layout */}
          <Route path='/get-started' element={<GetStartedPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/otp' element={<OtpPage />} />
          <Route path='/username' element={<UserNamePage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          {/* 
        <Route path='/humans' element={<DeveloperDetailsPage />} /> */}

          {/* Pages with Layout */}
          <Route element={<LayoutRoute />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/my-matches' element={<MyMatchesPage />} />
            <Route
              path='/international-matches'
              element={<InternationalMatchesPage />}
            />
            <Route path='/predictions' element={<PredictionsPage />} />
            <Route
              path='/match/completed/:id'
              element={<CompletedMatchPage />}
            />
            <Route path='/match/upcoming/:id' element={<UpcomingMatchPage />} />
            <Route path='/wallet' element={<WalletPage />} />
            <Route path='/payment-options' element={<PaymentOptionsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/notification' element={<NotificationsPage />} />
            <Route path='/create-team' element={<CreateTeamPage />} />
            {/*
          <Route path='/edit-profile' element={<EditpPofilePage />} />
          <Route path='/edit-team' element={<EditTeamPage />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
