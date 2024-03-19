import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';

const rootReducer = {
  user: userSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
