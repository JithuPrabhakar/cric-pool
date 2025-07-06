import { useState } from "react"
import { useParams } from "react-router-dom"
import Winnings from "../Winnings"
import MyTeam from "../../features/team/MyTeam"
import Leaderboard from "../Leaderboard"

const UpcomingTabs = ({ prizes, setIsEdit, isEdit }) => {
  const [activeTab, setActiveTab] = useState("Winnings")
  const { id } = useParams()

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b">
        {["Winnings", "My Squad", "Leaderboard"].map(
          (tab) => (
            <button
              key={tab}
              className={`flex-1 p-2 text-center font-medium ${
                activeTab === tab
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Winnings" && (
          <Winnings prizes={prizes} />
        )}

        {activeTab === "My Squad" && (
          <MyTeam
            matchId={id}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
          />
        )}

        {activeTab === "Leaderboard" && (
          <Leaderboard matchId={id} />
        )}
      </div>
    </div>
  )
}

export default UpcomingTabs
