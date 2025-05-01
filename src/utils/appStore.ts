import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export type RootState = ReturnType<typeof appStore.getState>;

export const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;
