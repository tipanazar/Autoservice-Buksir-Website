import { createAsyncThunk } from "@reduxjs/toolkit";

export const adminSignin = createAsyncThunk(
  "admin/signin",
  async (formData, { rejectWithValue }) => {
    try {
      const { login, password } = formData;
      console.log(login, password);
      return "done";
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
