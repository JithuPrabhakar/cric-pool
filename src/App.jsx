import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import MainLayout from "./pages/MainLayout"
import LoginLayout from "./pages/LoginLayout"
import Login from "./features/auth/Login"
import Register from "./features/auth/Register"
import ForgotPassword from "./features/auth/ForgotPassword"
import Otp from "./features/auth/Otp"
import GetStarted from "./features/auth/GetStarted"
import Home from "./features/home/Home"
import Predictions from "./features/predictions/Predictions"
import Upcoming from "./features/predictions/PredictionsUpcoming"
import Live from "./features/predictions/PredictionsLive"
import Completed from "./features/predictions/PredictionsCompleted"
import PredictionsUpcomingDetails from "./features/predictions/PredictionsUpcomingDetails"
import PredictionsLiveDetails from "./features/predictions/PredictionsLiveDetails"
import PredictionsCompletedDetails from "./features/predictions/PredictionsCompletedDetails"
import MyMatches from "./features/mymatches/MyMatches"
import MyMatchesUpcoming from "./features/mymatches/MyMatchesUpcoming"
import MyMatchesLive from "./features/mymatches/MyMatchesLive"
import MyMatchesCompleted from "./features/mymatches/MyMatchesCompleted"
import MyMatchesUpcomingDetails from "./features/mymatches/MyMatchesUpcomingDetails"
import MyMatchesLiveDetails from "./features/mymatches/MyMatchesLiveDetails"
import MyMatchesCompletedDetails from "./features/mymatches/MyMatchesCompletedDetails"
import CreateTeam from "./features/team/CreateTeam"
import International from "./features/international/International"
import Profile from "./components/profile/profile"

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route
            path="/get-started"
            element={<GetStarted />}
          />
          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />
        </Route>

        {/* Main Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/predictions"
            element={<Predictions />}
          >
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="live" element={<Live />} />
            <Route
              path="completed"
              element={<Completed />}
            />
          </Route>

          <Route
            path="predictions/upcoming/match/:id"
            element={<PredictionsUpcomingDetails />}
          />
          <Route
            path="predictions/live/match/:id"
            element={<PredictionsLiveDetails />}
          />
          <Route
            path="predictions/completed/match/:id"
            element={<PredictionsCompletedDetails />}
          />

          <Route path="/my-matches" element={<MyMatches />}>
            <Route
              path="upcoming"
              element={<MyMatchesUpcoming />}
            />
            <Route
              path="live"
              element={<MyMatchesLive />}
            />
            <Route
              path="completed"
              element={<MyMatchesCompleted />}
            />
          </Route>
          <Route
            path="my-matches/upcoming/match/:id"
            element={<MyMatchesUpcomingDetails />}
          />
          <Route
            path="my-matches/live/match/:id"
            element={<MyMatchesLiveDetails />}
          />
          <Route
            path="my-matches/completed/match/:id"
            element={<MyMatchesCompletedDetails />}
          />

          <Route
            path="/international-matches"
            element={<International />}
          />

          <Route
            path="/create-team/:id"
            element={<CreateTeam />}
          />

          <Route path="/profile" element={<Profile />} />

          <Route
            path="*"
            element={
              <div className="text-center mt-5">
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
