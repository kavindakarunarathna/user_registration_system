/**
 * Store
 */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../ducks/feature-auth/reducer"

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
