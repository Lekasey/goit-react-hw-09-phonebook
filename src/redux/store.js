import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phonebookReducer } from './phonebook';

import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const contactsPersistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    phonebook:
      // persistReducer(contactsPersistConfig,
      phonebookReducer,
    // ),
  },
  middleware:
    process.env.NODE_ENV === 'development'
      ? middleware
      : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
// { store, persistor };
