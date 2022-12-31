import { createSlice } from "@reduxjs/toolkit";

import { getTemplates, getArticle } from "./articlesOperations";

const initialState = {
  templates: null,
  article: {
    path: "",
    text: "",
  },
  isTemplatesLoading: false,
  isArticleLoading: false,
  articleError: null,
  templatesError: null,
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
      state.isTemplatesLoading = true;
      state.templatesError = null;
    });
    builder.addCase(getTemplates.fulfilled, (state, { payload }) => {
      payload.other?.push(towingService);
      payload["car-tuning"]?.push(carAudio);
      state.templates = { ...payload };
      state.isTemplatesLoading = false;
    });
    builder.addCase(getTemplates.rejected, (state, { payload }) => {
      state.templatesError =
        payload || "Помилка, спробуйте перезавантажити сторінку.";
      state.isTemplatesLoading = false;
    });

    builder.addCase(getArticle.pending, (state) => {
      state.isArticleLoading = true;
      state.articleError = null;
    });
    builder.addCase(getArticle.fulfilled, (state, { payload }) => {
      state.article = { ...payload };
      state.isArticleLoading = false;
    });
    builder.addCase(getArticle.rejected, (state, { payload }) => {
      state.articleError =
        payload || "Помилка, спробуйте перезавантажити сторінку.";
      state.isArticleLoading = false;
    });
  },
});

export const articlesReducer = articlesSlice.reducer;
