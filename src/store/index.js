import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addReservations from './addReservations';

const reducer = combineReducers({
  addReservations,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
