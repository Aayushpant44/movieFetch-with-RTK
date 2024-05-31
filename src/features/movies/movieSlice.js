import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    Title: null,
  },
};

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      //here i directly updated the sate with only one obj that is this
      state.movies = {
        Title: action.payload,
      };
    },
  },
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
