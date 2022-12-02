import { createSlice } from "@reduxjs/toolkit";

import { getCurrentAdmin, logout, signin } from "./authOperations";

const initialState = {
  login: "",
  token: "",
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.login = payload.login;
      state.token = payload.token;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    builder.addCase(getCurrentAdmin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCurrentAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorized = true;
      state.login = payload.login;
    });
    builder.addCase(getCurrentAdmin.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });

    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isAuthorized = false;
      state.login = "";
      state.token = "";
    });
    builder.addCase(logout.rejected, (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    });
  },
});

export const authReducer = authSlice.reducer;
