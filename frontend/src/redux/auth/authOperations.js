import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCurrentAdminApi, signinApi } from "../../shared/api/authApi";

export const signin = createAsyncThunk(
  "admin/signin",
  async (formData, { rejectWithValue }) => {
    try {
      return await signinApi(formData);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getCurrentAdmin = createAsyncThunk(
  "admin/getCurrentAdmin",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      return await getCurrentAdminApi(auth.token);
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
