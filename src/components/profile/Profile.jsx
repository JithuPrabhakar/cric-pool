import React, { useState } from "react"
import {
  User,
  Edit3,
  Trophy,
  TrendingUp,
  Calendar,
  Users,
  DollarSign,
  Target,
  Star,
  Award,
  Crown,
  Gift,
} from "lucide-react"
import LogoutButton from "../../features/auth/Logout"

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("contests")

  const userStats = {
    followers: "41K",
    following: "20.1K",
    level: 15,
    winRate: 37,
    totalEarnings: "55,00,000",
    matchesPlayed: 40000,
    ranking: 11,
    score: 5,
    joinedDate: "Jan 2017",
  }

  const achievements = [
    {
      icon: Crown,
      title: "Level 15",
      subtitle: "Master Player",
      color: "text-yellow-500",
    },
    {
      icon: Trophy,
      title: "Win ₹1000 Cash Bonus",
      subtitle: "Level 20",
      color: "text-green-500",
    },
    {
      icon: Star,
      title: "₹7 Cash",
      subtitle: "Free Contests",
      color: "text-blue-500",
    },
    {
      icon: Gift,
      title: "₹300 Bonus",
      subtitle: "New Contest",
      color: "text-purple-500",
    },
  ]

  const TabButton = ({ id, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive
          ? "bg-accent text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <LogoutButton />
            <Edit3 className="w-5 h-5" />
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-accent text-white text-xs px-2 py-1 rounded-full font-bold">
                {userStats.level}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                FantasyStarz
              </h2>
              <p className="text-blue-200">Swing Singh</p>
            </div>
          </div>

          {/* Followers Stats */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold">
                {userStats.followers}
              </div>
              <div className="text-blue-200 text-sm">
                Followers
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">
                {userStats.following}
              </div>
              <div className="text-blue-200 text-sm">
                Following
              </div>
            </div>
          </div>

          {/* Add Button */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
            <Users className="w-4 h-4" />
            You haven't given your team a name yet!
            <span className="bg-white text-blue-500 px-2 py-1 rounded text-sm ml-2">
              ADD
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto bg-white">
        {/* Level Progress */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Level {userStats.level}
            </span>
            <span className="text-sm text-gray-500">
              To Reach Level 20 Play:
            </span>
          </div>

          <div className="bg-gray-200 rounded-full h-2 mb-3">
            <div
              className="bg-accent h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">
                  07
                </span>
              </div>
              <span className="text-gray-600">
                Free Contests
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-600">
                ₹300 Bonus
              </span>
              <span className="text-green-600 font-medium">
                1 day left
              </span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-800">
              Level 20 - Win ₹1000 Cash Bonus
            </span>
          </div>
        </div>

        {/* Career Stats */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            Career Stats
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {userStats.winRate}%
              </div>
              <div className="text-sm text-gray-500">
                Win Rate
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                <div
                  className="bg-blue-500 h-1 rounded-full"
                  style={{ width: `${userStats.winRate}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {userStats.totalEarnings}
              </div>
              <div className="text-sm text-gray-500">
                Contests
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                ₹{userStats.totalEarnings}
              </div>
              <div className="text-sm text-gray-500">
                Total Score
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {userStats.matchesPlayed.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                Matches
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {userStats.ranking}
              </div>
              <div className="text-sm text-gray-500">
                Rank
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">
                {userStats.score}
              </div>
              <div className="text-sm text-gray-500">
                Score
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4 inline mr-1" />
            You have been playing on Dream11 since{" "}
            {userStats.joinedDate}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors">
              View Detailed Stats
            </button>
            <button className="w-full border border-accent text-accent hover:bg-accent hover:text-white py-3 rounded-lg font-medium transition-colors">
              Share Profile
            </button>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="p-4 bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-3">
            Recent Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm"
              >
                <achievement.icon
                  className={`w-6 h-6 mb-2 ${achievement.color}`}
                />
                <div className="text-sm font-medium text-gray-800">
                  {achievement.title}
                </div>
                <div className="text-xs text-gray-500">
                  {achievement.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="p-4 bg-white border-t">
          <div className="flex gap-2 overflow-x-auto">
            <TabButton
              id="contests"
              label="My Contests"
              isActive={activeTab === "contests"}
              onClick={setActiveTab}
            />
            <TabButton
              id="teams"
              label="My Teams"
              isActive={activeTab === "teams"}
              onClick={setActiveTab}
            />
            <TabButton
              id="history"
              label="History"
              isActive={activeTab === "history"}
              onClick={setActiveTab}
            />
            <TabButton
              id="rewards"
              label="Rewards"
              isActive={activeTab === "rewards"}
              onClick={setActiveTab}
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 min-h-32">
          {activeTab === "contests" && (
            <div className="text-center py-8">
              <Trophy className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No contests joined yet
              </p>
              <button className="mt-3 bg-accent text-white px-6 py-2 rounded-lg text-sm font-medium">
                Join Contest
              </button>
            </div>
          )}
          {activeTab === "teams" && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No teams created yet
              </p>
              <button className="mt-3 bg-accent text-white px-6 py-2 rounded-lg text-sm font-medium">
                Create Team
              </button>
            </div>
          )}
          {activeTab === "history" && (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No match history
              </p>
            </div>
          )}
          {activeTab === "rewards" && (
            <div className="text-center py-8">
              <Gift className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">
                No rewards earned yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
