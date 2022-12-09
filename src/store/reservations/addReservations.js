import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/reservations';
const ADD_RESERVATION = 'book_devs/ADD_RESERVATION';

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (
  {
    name, reservationDate, city, userId, developerId,
  },
) => {
  const data = {
    name, reservation_date: reservationDate, city, user_id: userId, developer_id: developerId,
  };

  const userAuth = localStorage.getItem('userAuth');

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: userAuth,
    },
    body: JSON.stringify(data),
  });
});

const storeSlice = createSlice({
  name: 'book_devs',
  initialState: [],
  extraReducers: {
    [addReservation.fulfilled]: (state, action) => action.payload,
  },
});

// export const reservations = (state) => state.reservations;
export default storeSlice.reducer;
