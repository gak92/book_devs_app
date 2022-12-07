import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./reservations/reservations";
import authReducer from "./user/auth";

const rootReducer = combineReducers({
    reservations: reservationsReducer,
    authentication: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;