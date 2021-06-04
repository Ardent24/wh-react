import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    dataUser: {},
    isAuthUser: false,
    isLoading: true
  },
  reducers: {
    firstSetAuth(state, action) {
      state.dataUser = action.payload;
      state.isAuthUser = true;
    },
    getAuthUser(state, action) {
      state.dataUser = action.payload;
      state.isAuthUser = true;
    },
    isAuthUser(state, action) {
      const [user, bool] = action.payload;

      state.dataUser = user;
      state.isAuthUser = bool;
    },
    setAuthUserPending(state, action) {
      state.isLoading = action.payload;
    },
    // isLoading(state, action) {
    //   state.isLoading = action.payload;
    // },
  },
});

export default authReducer.reducer;

export const { firstSetAuth, getAuthUser, isAuthUser, setAuthUserPending } = authReducer.actions;
