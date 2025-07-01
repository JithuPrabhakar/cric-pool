import { useState } from "react"
import { useLocation } from "react-router-dom"
import Winnings from "../Winnings"
import MyTeam from "../../features/team/MyTeam"
import Leaderboard from "../Leaderboard"
import { useParams } from "react-router-dom"

const UpcomingTabs = ({ prizes }) => {
  const [activeTab, setActiveTab] = useState("Winnings")
  const location = useLocation()
  const { id } = useParams()

  // Check if the current path is from "my-matches" or "predictions"
  const isFromMyMatches =
    location.pathname.includes("my-matches")

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          className={`flex-1 p-2 text-center font-medium ${
            activeTab === "Winnings"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Winnings")}
        >
          Winnings
        </button>
        <button
          className={`flex-1 p-2 text-center font-medium ${
            activeTab === "My Squad"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("My Squad")}
        >
          My Squad
        </button>
        <button
          className={`flex-1 p-2 text-center font-medium ${
            activeTab === "Leaderboard"
              ? "text-primary-600 border-b-2 border-primary-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Leaderboard")}
        >
          Leaderboard
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Winnings" && (
          <Winnings prizes={prizes} />
        )}

        {activeTab === "My Squad" &&
          (isFromMyMatches ? (
            <MyTeam matchId={id} />
          ) : (
            <p className="text-black text-center p-4">
              Join the Match to create your team
            </p>
          ))}

        {activeTab === "Leaderboard" && (
          <Leaderboard matchId={id} />
        )}
      </div>
    </div>
  )
}

export default UpcomingTabs
