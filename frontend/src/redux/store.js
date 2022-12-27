import { configureStore } from "@reduxjs/toolkit";

import { articlesReducer } from "./articles/articlesReducer";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});
