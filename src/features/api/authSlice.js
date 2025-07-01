import { createSlice } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      )
    },
    clearUser: (state) => {
      state.user = null
      localStorage.removeItem("user")
    },
  },
})

export const { setUser, clearUser } = authSlice.actions
export default authSlice.reducer
