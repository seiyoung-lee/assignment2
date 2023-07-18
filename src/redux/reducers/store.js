import { configureStore } from '@reduxjs/toolkit';
import invenctoryReducer from './reducer';

export const store = configureStore({
  reducer: {
    inventory: invenctoryReducer
  },
  devTools: true
});