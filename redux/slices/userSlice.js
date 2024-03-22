import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setlogin(state) {
      state.isLoggedIn = true;
    },
    setLoginData(state, action) {
      state.user = action.payload;
    },
    setUserData(state, action) {
      state.user = action.payload;
    },
    setLogout(state) {
      state.user = null;
    },
  },
});

export const { setlogin, setLoginData, setUserData, setLogout } =
  userSlice.actions;
export default userSlice.reducer;
