import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
  },
  reducers: {
    loginUser: (state, action) => {
      state.user.push(action.payload);
    },
    logoutUser: (state) => {
      state.user = [];
    },
  },
});
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
