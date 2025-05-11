import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import themeReducer from './themeSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    theme: themeReducer,
    filter: filterReducer
  }
});