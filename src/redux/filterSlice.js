import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sortField: 'marketCap', // Default sort field
    sortDirection: 'desc', // Default sort direction (descending)
    filterType: 'all' // Filter type (all, gainers, losers)
  },
  reducers: {
    setSortField: (state, action) => {
      // If clicking the same field, toggle direction
      if (state.sortField === action.payload) {
        state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        // If clicking a new field, set it and default to descending
        state.sortField = action.payload;
        state.sortDirection = 'desc';
      }
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    }
  }
});

export const { setSortField, setSortDirection, setFilterType } = filterSlice.actions;

// Selectors
export const selectSortField = (state) => state.filter.sortField;
export const selectSortDirection = (state) => state.filter.sortDirection;
export const selectFilterType = (state) => state.filter.filterType;

export default filterSlice.reducer;