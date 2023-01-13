import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RESERVATIONS_URL = 'https://bookadev.onrender.com/api/v1/reservations';
const FETCH_RESERVATIONS = 'reservations/fetchReservations';
const DELETE_RESERVATION = 'reservations/deleteReservation';
const userAuth = localStorage.getItem('userAuth');

export const fetchReservations = createAsyncThunk(
  FETCH_RESERVATIONS,
  async () => {
    const response = await axios.get(RESERVATIONS_URL, {
      headers: {
        Authorization: userAuth,
      },
    });
    const data = await response.data;
    return data;
  },
);

export const deleteReservation = createAsyncThunk(
  DELETE_RESERVATION,
  async (id) => {
    const response = await axios.delete(`${RESERVATIONS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: userAuth,
      },
    });
    const data = await response.data;
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
