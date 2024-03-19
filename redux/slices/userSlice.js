import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    setUserDetails(state, action) {
      state.user = action.payload;
    },
  },
});

export const { login, setUserDetails } = userSlice.actions;
export default userSlice.reducer;
