import { createSlice } from "@reduxjs/toolkit";

import { getTemplates, getArticle } from "./articlesOperations";

const initialState = {
  templates: null,
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
      payload.other.push({
        title: "Буксирування Автомобіля",
        path: "/other/buksyruvannya-avtomobilya",
        imageLink:
          "https://res.cloudinary.com/dv2ewzim4/image/upload/v1671657442/Buksir%20Website/other/hyundai_grand_starex_royale_1_td9lmw.jpg",
      });
      state.templates = { ...payload };
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
