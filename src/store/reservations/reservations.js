import { createAsyncThunk } from '@reduxjs/toolkit';

const RESERVATIONS_URL = 'http://localhost:3000/api/v1/reservations';

const FETCH_RESERVATIONS = 'reservations/fetchReservations';
const DELETE_RESERVATION = 'reservations/deleteReservation';

export const fetchReservations = createAsyncThunk(
  FETCH_RESERVATIONS,
  async (userId) => {
    const response = await fetch(RESERVATIONS_URL);
    const data = await response.json();
    return data.filter((reservation) => reservation.user_id === userId);
  },
);

export const deleteReservation = createAsyncThunk(
  DELETE_RESERVATION,
  async (id) => {
    const response = await fetch(`${RESERVATIONS_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
);

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export default function reservationsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_RESERVATIONS}/pending`:
      return {
        ...state,
        status: 'loading',
      };
    case `${FETCH_RESERVATIONS}/fulfilled`:
      return {
        ...state,
        status: 'succeeded',
        reservations: action.payload,
      };
    case `${FETCH_RESERVATIONS}/rejected`:
      return {
        ...state,
        status: 'failed',
        error: action.error.message,
      };
    case `${DELETE_RESERVATION}/pending`:
      return {
        ...state,
        status: 'loading',
      };
    case `${DELETE_RESERVATION}/fulfilled`:
      return {
        ...state,
        status: 'succeeded',
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
      };
    case `${DELETE_RESERVATION}/rejected`:
      return {
        ...state,
        status: 'failed',
        error: action.error.message,
      };
    default:
      return state;
  }
}
