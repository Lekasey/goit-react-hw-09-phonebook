import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebooks-reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? middleware
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});
export default store;
