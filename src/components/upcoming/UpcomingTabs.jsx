import { useState } from "react"
import { useLocation } from "react-router-dom"
import Winnings from "../Winnings"
import MyTeam from "../../features/team/MyTeam"

const UpcomingTabs = ({ prizes, matchId }) => {
  const [activeTab, setActiveTab] = useState("Winnings")
  const location = useLocation()

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
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Winnings" && (
          <Winnings prizes={prizes} />
        )}

        {activeTab === "My Squad" &&
          (isFromMyMatches ? (
            <MyTeam matchId={matchId} />
          ) : (
            <p className="text-black text-center p-4">
              Join the Match to create your team
            </p>
          ))}
      </div>
    </div>
  )
}

export default UpcomingTabs
