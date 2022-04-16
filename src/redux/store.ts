import { combineReducers } from "redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';

import notes from './slices/notes';
import categories from './slices/categories'

export const rootReducer = combineReducers({
    notes,
    categories,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;//combines the slice states
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;
