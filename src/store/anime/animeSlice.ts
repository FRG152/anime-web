import { createSlice } from "@reduxjs/toolkit";

export const animeSlice = createSlice({
  name: "anime",
  initialState: {
    inputValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = animeSlice.actions;

export default animeSlice.reducer;
