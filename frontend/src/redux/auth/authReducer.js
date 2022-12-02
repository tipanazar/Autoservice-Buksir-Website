import { createSlice } from "@reduxjs/toolkit";

import { adminSignin } from "./authOperations";

const initialState = {
  admin: {
    login: "",
    token: "",
  },
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(adminSignin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(adminSignin.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(adminSignin.rejected, (state, { payload }) => {
      console.log(payload);
      state.error = payload;
      state.isLoading = false;
    });

    // [adminSignin.pending]: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [adminSignin.fulfilled]: (state, { payload }) => {
    //   console.log(payload);
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [adminSignin.rejected]: (state, { payload }) => {
    //   console.log(payload);
    //   state.error = payload;
    //   state.isLoading = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
