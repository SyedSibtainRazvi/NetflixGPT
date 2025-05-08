import { createSlice } from '@reduxjs/toolkit';
import { Movie } from './moviesSlice';

interface GptState {
  showGptSearch: boolean;
  movieResults: Movie[][];
  movieNames: string[];
}

const initialState: GptState = {
  showGptSearch: false,
  movieResults: [],
  movieNames: [],
};

const gptSlice = createSlice({
  name: 'gpt',
  initialState,
  reducers: {
    toggleGptSearch: state => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.movieResults = action.payload.movieResults;
      state.movieNames = action.payload.movieNames;
    },
    removeGptMovieResult: state => {
      state.movieResults = [];
      state.movieNames = [];
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, removeGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
