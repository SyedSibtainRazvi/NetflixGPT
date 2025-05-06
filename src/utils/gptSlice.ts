import { createSlice } from '@reduxjs/toolkit';

interface GptState {
  showGptSearch: boolean;
}

const initialState: GptState = {
  showGptSearch: false,
};

const gptSlice = createSlice({
  name: 'gpt',
  initialState,
  reducers: {
    toggleGptSearch: state => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
