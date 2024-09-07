import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Make sure this path is correct based on where you save authSlice.js

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
