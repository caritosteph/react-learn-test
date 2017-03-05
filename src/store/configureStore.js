import { createStore } from 'redux';
import rootReducer from './configureStore.js';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
