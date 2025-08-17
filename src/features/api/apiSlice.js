import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

const baseUrl = "https://cricketwar.com/"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Matches", "Predictions", "Users", "Teams"],
  endpoints: (builder) => ({
    // ==========================
    // MATCHES SECTION
    // ==========================
    getUpcomingMatches: builder.query({
      query: () =>
        "APIMatches/ListofUpcomingMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getPastMatches: builder.query({
      query: () => "APIMatches/ListofPastMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getLiveMatches: builder.query({
      query: () => "APIMatches/ListofLiveMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getMatchDetails: builder.query({
      query: (id) => `APIMatches/MatchDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: (res, err, id) => [
        { type: "Matches", id },
      ],
    }),
    getSquadList: builder.query({
      query: ({ id, teamId, userId }) =>
        `APIMatches/GetMatchSquadList?id=${id}&team_id=${teamId}&user_id=${userId}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getBattingFigure: builder.query({
      query: ({ id, teamId }) =>
        `APIMatches/GetMatchBattingFigure?id=${id}&team_id=${teamId}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getBowlingFigure: builder.query({
      query: ({ id, teamId }) =>
        `APIMatches/GetMatchBowlingFigure?id=${id}&team_id=${teamId}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getPartnership: builder.query({
      query: ({ id, teamId }) =>
        `APIMatches/GetMatchPartnership?id=${id}&team_id=${teamId}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getBallByBallDetails: builder.query({
      query: ({ id, teamId }) =>
        `APIMatches/GetMatchBallByBallDetails?id=${id}&team_id=${teamId}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),
    getMVPDetails: builder.query({
      query: (id) =>
        `APIMatches/GetMatchMVPDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Matches"],
    }),

    // ==========================
    // USER'S MY MATCHES SECTION
    // ==========================
    getMyUpcomingMatches: builder.query({
      query: ({ userid, page = 1 }) =>
        `APIFantasy/ListofMyUpcomingMatches?userid=${userid}&page=${page}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyLiveMatches: builder.query({
      query: ({ userid, page = 1 }) =>
        `APIFantasy/ListofMyLiveMatches?userid=${userid}&page=${page}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyPastMatches: builder.query({
      query: ({ userid, page = 1 }) =>
        `APIFantasy/ListofMyPastMatches?userid=${userid}&page=${page}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),

    // ==========================
    // PREDICTION SECTION
    // ==========================
    getPredictionUpcomingMatches: builder.query({
      query: () =>
        "APIFantasy/ListofUpcomingMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getPredictionPastMatches: builder.query({
      query: () => "APIFantasy/ListofPastMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getPredictionLiveMatches: builder.query({
      query: () => "APIFantasy/ListofLiveMatches?page=1",
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getPredictionMatchDetails: builder.query({
      query: (id) => `APIFantasy/MatchDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: (res, err, id) => [
        { type: "Predictions", id },
      ],
    }),
    getPrizeDetails: builder.query({
      query: (id) => `APIFantasy/PrizeDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: (res, err, id) => [
        { type: "Predictions", id },
      ],
    }),
    getWinnerDetails: builder.query({
      query: (id) => `APIFantasy/WinnerDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: (res, err, id) => [
        { type: "Predictions", id },
      ],
    }),
    createFantasyTeam: builder.mutation({
      query: (teamData) => ({
        url: "APIFantasy/CreateFantasyTeam",
        method: "POST",
        body: teamData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getFantasyTeamPlayers: builder.query({
      query: ({ id, team_id }) =>
        `APIFantasy/FantasyTeamPlayers?team_id=${team_id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getFantasyTeamPlayerPoints: builder.query({
      query: ({ id, player_id }) =>
        `APIFantasy/FantasyTeamPlayerPoints?id=${id}&player_id=${player_id}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyFantasySquad: builder.query({
      query: ({ id, userid }) =>
        `APIFantasy/MyFantasySquad?id=${id}&team_id=0&user_id=${userid}`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyUpcomingMatches: builder.query({
      query: ({ userid }) =>
        `APIFantasy/ListofMyUpcomingMatches?userid=${userid}&page=1`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyLiveMatches: builder.query({
      query: ({ userid }) =>
        `APIFantasy/ListofMyLiveMatches?userid=${userid}&page=1`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),
    getMyPastMatches: builder.query({
      query: ({ userid }) =>
        `APIFantasy/ListofMyPastMatches?userid=${userid}&page=1`,
      transformResponse: (res) => res[1] || [],
      providesTags: ["Predictions"],
    }),

    // ==========================
    // PROFILE SECTION
    // ==========================
    signUpUser: builder.mutation({
      query: ({ name, username, password }) =>
        `APIProfile/Signup?name=${name}&username=${username}&password=${password}`,
    }),
    confirmOTP: builder.mutation({
      query: ({ username, otp }) =>
        `APIProfile/ConfirmOTP?username=${username}&otp=${otp}`,
    }),
    resendOTP: builder.mutation({
      query: ({ username }) =>
        `APIProfile/ResetOTP?username=${username}`,
    }),
    signInUser: builder.mutation({
      query: ({ username, password }) =>
        `APIProfile/SignIn?username=${username}&password=${password}`,
    }),
    forgotPassword: builder.mutation({
      query: ({ username }) =>
        `APIProfile/ForgotPassword?username=${username}`,
    }),
    getSubscriptionDetails: builder.query({
      query: (id) =>
        `APIProfile/GetSubscriptionDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
    }),
    getProfileDetails: builder.query({
      query: (id) =>
        `APIProfile/GetProfileDetails?id=${id}`,
      transformResponse: (res) => res[1] || [],
    }),
  }),
})

// ==========================
// EXPORT HOOKS
// ==========================
export const {
  // Matches
  useGetUpcomingMatchesQuery,
  useGetPastMatchesQuery,
  useGetLiveMatchesQuery,
  useGetMatchDetailsQuery,
  useGetSquadListQuery,
  useGetBattingFigureQuery,
  useGetBowlingFigureQuery,
  useGetPartnershipQuery,
  useGetBallByBallDetailsQuery,
  useGetMVPDetailsQuery,

  //User My matches
  useGetMyUpcomingMatchesQuery,
  useGetMyLiveMatchesQuery,
  useGetMyPastMatchesQuery,

  // Predictions
  useGetPredictionUpcomingMatchesQuery,
  useGetPredictionPastMatchesQuery,
  useGetPredictionLiveMatchesQuery,
  useGetPredictionMatchDetailsQuery,
  useGetPrizeDetailsQuery,
  useGetWinnerDetailsQuery,
  useCreateFantasyTeamMutation,
  useGetFantasyTeamPlayersQuery,
  useGetFantasyTeamPlayerPointsQuery,
  useGetMyFantasySquadQuery,

  // Profile
  useSignUpUserMutation,
  useConfirmOTPMutation,
  useResendOTPMutation,
  useSignInUserMutation,
  useForgotPasswordMutation,
  useGetSubscriptionDetailsQuery,
  useGetProfileDetailsQuery,
} = apiSlice
