import React, { useState } from "react"
import {
  User,
  Edit3,
  Trophy,
  TrendingUp,
  Calendar,
} from "lucide-react"
import LogoutButton from "../../features/auth/Logout"
import { NavLink } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"
import {
  useGetProfileDetailsQuery,
  useGetSubscriptionDetailsQuery,
} from "../../features/api/apiSlice"

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("contests")
  const [showModal, setShowModal] = useState(false)
  const [selectedPlanId, setSelectedPlanId] = useState(null)
  const [mobile, setMobile] = useState("")

  // Get stored user from localStorage
  const storedUser = localStorage.getItem("user")
  const userData = storedUser
    ? JSON.parse(storedUser)
    : null
  const userId = userData?.user_id

  // Profile details API
  const {
    data: user,
    isLoading,
    isError,
  } = useGetProfileDetailsQuery(userId)

  // Subscription details API (pass 0 or userId based on backend requirement)
  const { data: subscriptions, isLoading: subLoading } =
    useGetSubscriptionDetailsQuery(0)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error loading profile.</p>

  const currentPlan = subscriptions?.find(
    (plan) =>
      plan.SubscriptionID === user[0]?.SubscriptionID
  )

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        activeTab === id
          ? "bg-accent text-white shadow-md"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  )

  const handleSubscribe = (planId) => {
    if (currentPlan?.SubscriptionID === planId) {
      alert("This is your current plan.")
      return
    }
    setSelectedPlanId(planId)
    setShowModal(true)
  }

  const handleConfirm = () => {
    if (!mobile) {
      alert("Please enter your mobile number.")
      return
    }
    const paymentUrl = `https://bidandbuyindia.com/cwf/index?mobile=${mobile}&membershipID=${selectedPlanId}`
    window.location.href = paymentUrl
  }

  return (
    <div className="bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <NavLink to={`/`}>
              <IoArrowBackOutline />
            </NavLink>
            <Edit3 className="w-5 h-5" />
          </div>

          {/* Profile Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                {user[0].name}
              </h2>
              <p className="text-blue-200">
                {user[0].membership_status}
              </p>
            </div>
          </div>

          {/* Followers Stats */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold">
                {user[0].followers}
              </div>
              <div className="text-blue-200 text-sm">
                Followers
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">
                {user[0].folllwoings}
              </div>
              <div className="text-blue-200 text-sm">
                Following
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Stats */}
      <div className="max-w-md mx-auto bg-white p-4 mb-4">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Career Stats
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {user[0].win_rate}%
            </div>
            <div className="text-sm text-gray-500">
              Win Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {user[0].no_contests}
            </div>
            <div className="text-sm text-gray-500">
              Contests
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">
              {user[0].total_score}
            </div>
            <div className="text-sm text-gray-500">
              Total Score
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">
              {user[0].no_matches}
            </div>
            <div className="text-sm text-gray-500">
              Matches
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">
              {user[0].rank}
            </div>
            <div className="text-sm text-gray-500">
              Rank
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">
              {user[0].average_score}
            </div>
            <div className="text-sm text-gray-500">
              Avg Score
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mb-6">
          <Calendar className="w-4 h-4 inline mr-1" />
          Member Since{" "}
          {user[0].membership_start_date || "N/A"}
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-md mx-auto bg-white p-4 mb-4">
        <h3 className="font-semibold text-gray-800 mb-4">
          Subscription
        </h3>

        {subLoading ? (
          <p>Loading subscription plans...</p>
        ) : (
          <>
            {currentPlan && (
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <h4 className="font-bold text-green-700">
                  Current Plan
                </h4>
                <p>
                  {currentPlan.description} - ₹
                  {currentPlan.amount}
                </p>
                <p className="text-sm text-gray-600">
                  Valid until: {user[0]?.end_date || "N/A"}
                </p>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              {subscriptions?.map((plan) => (
                <div
                  key={plan.SubscriptionID}
                  className="border p-3 rounded-lg gap-3 shadow-sm flex flex-col justify-between items-center"
                >
                  <div>
                    <h4 className="font-semibold">
                      {plan.description}
                    </h4>
                    <p className="text-sm text-gray-600">
                      ₹{plan.amount}
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1 rounded ${
                      currentPlan?.SubscriptionID ===
                      plan.SubscriptionID
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                    onClick={() =>
                      handleSubscribe(plan.SubscriptionID)
                    }
                    disabled={
                      currentPlan?.SubscriptionID ===
                      plan.SubscriptionID
                    }
                  >
                    {currentPlan?.SubscriptionID ===
                    plan.SubscriptionID
                      ? "Current"
                      : "Subscribe"}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
              <h2 className="text-lg font-semibold mb-4">
                Enter Mobile Number
              </h2>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2 overflow-x-auto">
          <TabButton id="contests" label="My Contests" />
          <TabButton id="teams" label="My Teams" />
          <TabButton id="history" label="History" />
          <TabButton id="rewards" label="Rewards" />
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
          </div>
        )}
      </div>

      <LogoutButton />
    </div>
  )
}

export default UserProfile
