import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./anime/animeSlice";

export const store = configureStore({
  reducer: {
    anime: animeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
