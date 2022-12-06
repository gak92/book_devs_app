import { createAsyncThunk } from "@reduxjs/toolkit";

const RESERVATIONS_URL = "http://localhost:3000/api/v1/reservations";

const FETCH_RESERVATIONS = "reservations/fetchReservations";

export const fetchReservations = createAsyncThunk(
    FETCH_RESERVATIONS,
    async () => {
        const response = await fetch(RESERVATIONS_URL);
        const data = await response.json();
        return data;
    }
);

const initialState = {
    reservations: [],
    status: "idle",
    error: null,
};

export default function reservationsReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_RESERVATIONS}/pending`:
            return {
                ...state,
                status: "loading",
            };
        case `${FETCH_RESERVATIONS}/fulfilled`:
            return {
                ...state,
                status: "succeeded",
                reservations: action.payload,
            };
        case `${FETCH_RESERVATIONS}/rejected`:
            return {
                ...state,
                status: "failed",
                error: action.error.message,
            };
        default:
            return state;
    }
}
