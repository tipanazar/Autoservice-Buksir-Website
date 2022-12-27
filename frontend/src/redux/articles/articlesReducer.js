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

const towingService = {
  title: "Буксирування Автомобіля",
  path: "/other/buksyruvannya-avtomobilya",
  imageLink:
    "https://res.cloudinary.com/dv2ewzim4/image/upload/v1671657068/Buksir%20Website/sidebars/shema-buksyruvannya_k7tn4n.jpg",
};

const carAudio = {
  title: "Автоакустика",
  path: "/car-tuning/avtoakustyka",
  imageLink: null,
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
      payload.other.push(towingService);
      payload["car-tuning"].push(carAudio);
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
