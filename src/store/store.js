
import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui/uiSlice';
import { authSlice } from './auth/authSlice';


export const store = configureStore({


  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },

});
