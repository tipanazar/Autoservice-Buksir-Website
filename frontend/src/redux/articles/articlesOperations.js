import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTemplatesApi, getArticleApi } from "../../shared/api/articlesApi";

export const getTemplates = createAsyncThunk(
  "admin/signin",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getTemplatesApi();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const getArticle = createAsyncThunk(
  "admin/getCurrentAdmin",
  async (path, { rejectWithValue }) => {
    try {
      const { data } = await getArticleApi(path);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
