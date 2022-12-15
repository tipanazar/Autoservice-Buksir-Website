import { createSlice } from "@reduxjs/toolkit";

import { getTemplates, getArticle } from "./articlesOperations";

const initialState = {
  templates: {
    "car-service": [],
    "car-tunning": [],
    "our-features": [],
    partners: [],
  },
  article: {
    path: "",
    text: "",
  },
  isLoading: false,
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTemplates.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getTemplates.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      // console.log(payload)
      for (let template of payload) {
        state.templates[template.path.split("/")[1]]?.push(template);
      }
    });
    builder.addCase(getTemplates.rejected, (state, { payload }) => {
      state.error = payload || "Помилка, спробуйте перезавантажити сторінку.";
      state.isLoading = false;
    });

    builder.addCase(getArticle.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.article = { ...payload };
    });
    builder.addCase(getArticle.rejected, (state, { payload }) => {
      state.error = payload || "Помилка, спробуйте перезавантажити сторінку.";
      state.isLoading = false;
    });
  },
});

export const articlesReducer = articlesSlice.reducer;
