import { createSlice } from '@reduxjs/toolkit';

// Check if user prefers dark mode
const prefersDarkMode = window.matchMedia && 
  window.matchMedia('(prefers-color-scheme: dark)').matches;

// Try to get stored theme preference or use system preference
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme === 'dark';
  }
  return prefersDarkMode;
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: getInitialTheme()
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      // Store preference in localStorage
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      // Store preference in localStorage
      localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
    }
  }
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;

// Selector
export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;