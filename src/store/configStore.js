import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservations/reservations";

const rootReducer = combineReducers({
    reservations: reservationsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;