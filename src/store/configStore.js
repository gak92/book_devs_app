import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './reservations/reservations';
import authReducer from './user/auth';
import devReducer from './developers/devs/devReducer';
import addReservations from './reservations/addReservations';
import developersDetailsReducer from './developersDetails/developersDetails';

const rootReducer = combineReducers({
  reservations: reservationsReducer,
  authentication: authReducer,
  developer: devReducer,
  developerDetails: developersDetailsReducer,
  addReservations,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
