import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservations';
import authReducer from './user/auth';
import devReducer from './developers/devs/devReducer';
import addReservations from './reservations/addReservations';

const rootReducer = combineReducers({
  reservations: reservationsReducer,
  authentication: authReducer,
  developer: devReducer,
  addReservations,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
