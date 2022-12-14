import { createAsyncThunk } from '@reduxjs/toolkit';

const DEVELOPERSDETAILS_URL = 'http://127.0.0.1:3000/api/v1/developers';

const FETCH_DEVELOPERS_DETAILS = 'developers/fetchDevelopersDetails';

export const fetchDevelopersDetails = createAsyncThunk(
  FETCH_DEVELOPERS_DETAILS,
  async () => {
    const response = await fetch(DEVELOPERSDETAILS_URL);
    const data = await response.json();
    return data;
  },
);

const initialState = {
  developersDetails: [],
  status: 'idle',
  error: null,
};

export default function developersDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_DEVELOPERS_DETAILS}/pending`:
      return {
        ...state,
        status: 'loading',
      };
    case `${FETCH_DEVELOPERS_DETAILS}/fulfilled`:
      return {
        ...state,
        status: 'succeeded',
        developersDetails: action.payload,
      };
    case `${FETCH_DEVELOPERS_DETAILS}/rejected`:
      return {
        ...state,
        status: 'failed',
        error: action.error.message,
      };
    default:
      return state;
  }
}
