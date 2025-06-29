import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://cricketwar.com/'

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
      query: ({ id, teamId }) =>
        `APIMatches/GetMatchSquadList?id=${id}&team_id=${teamId}`,
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

  // Predictions
  useGetPredictionUpcomingMatchesQuery,
  useGetPredictionPastMatchesQuery,
  useGetPredictionLiveMatchesQuery,
  useGetPredictionMatchDetailsQuery,
  useGetPrizeDetailsQuery,
  useGetWinnerDetailsQuery,

  // Profile
  useSignUpUserMutation,
  useConfirmOTPMutation,
  useResendOTPMutation,
  useSignInUserMutation,
  useForgotPasswordMutation,
} = apiSlice
