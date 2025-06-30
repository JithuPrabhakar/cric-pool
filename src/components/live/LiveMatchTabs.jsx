import { useState } from "react"
import Winnings from "../Winnings"
import Leaderboard from "../Leaderboard"
import Scorecard from "../Scorecard"
import Commentary from "../Commentary"
import Stats from "../Stats"
import { useGetPrizeDetailsQuery } from "../../features/api/apiSlice"
import { useParams } from "react-router-dom"

const LiveMatchTabs = ({ match }) => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("Winnings")

  const { data: prizes } = useGetPrizeDetailsQuery(
    Number(id)
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case "Winnings":
        return <Winnings prizes={prizes} />
      case "Leaderboard":
        return <Leaderboard matchId={match.game_det_id} />
      case "Scorecard":
        return (
          <Scorecard
            matchId={match.game_det_id}
            team1={match.team1_id}
            team2={match.team2_id}
          />
        )
      case "Commentary":
        return (
          <Commentary
            matchId={match.game_det_id}
            team1={match.team1_id}
            team2={match.team2_id}
          />
        )
      case "Stats":
        return <Stats matchId={match.game_det_id} />
      default:
        return null
    }
  }

  return (
    <div>
      <div className="bg-white border-b">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab("Winnings")}
            className={`flex-1 text-center py-2 text-sm ${
              activeTab === "Winnings"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
          >
            Winnings
          </button>
          <button
            onClick={() => setActiveTab("Leaderboard")}
            className={`flex-1 text-center py-2 text-sm ${
              activeTab === "Leaderboard"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
          >
            Leaderboard
          </button>
          <button
            onClick={() => setActiveTab("Scorecard")}
            className={`flex-1 text-center py-2 text-sm ${
              activeTab === "Scorecard"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
          >
            Scorecard
          </button>
          <button
            onClick={() => setActiveTab("Commentary")}
            className={`flex-1 text-center py-2 text-sm ${
              activeTab === "Commentary"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
          >
            Commentary
          </button>
          <button
            onClick={() => setActiveTab("Stats")}
            className={`flex-1 text-center py-2 text-sm ${
              activeTab === "Stats"
                ? "text-primary-500 border-b-2 border-primary-500"
                : "text-gray-500"
            }`}
          >
            Stats
          </button>
        </div>
      </div>

      <div>{renderTabContent()}</div>
    </div>
  )
}

export default LiveMatchTabs
