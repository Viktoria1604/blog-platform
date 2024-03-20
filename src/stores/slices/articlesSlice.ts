import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface articlesListState {
  currentPage: number;
}

const currentPageString = localStorage.getItem('currentPage');
const currentPage = currentPageString ? JSON.parse(currentPageString) : 1;

const initialState: articlesListState = {
  currentPage: currentPage,
};

const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      localStorage.setItem('currentPage', JSON.stringify(action.payload));
    },
  },
});

export const { setCurrentPage } = articlesListSlice.actions;
export default articlesListSlice.reducer;
