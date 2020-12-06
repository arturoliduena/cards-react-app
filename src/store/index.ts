import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cardReducer, modalReducer } from './reducers';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

export const rootReducer = combineReducers({
  card: cardReducer,
  modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
})

store.subscribe(throttle(() => {
  saveState({
    card: store.getState().card,
  });
}, 1000));

export default store;