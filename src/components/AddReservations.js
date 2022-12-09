import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/reservations/addReservations';

const AddReservations = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    reservationDate: '',
    city: '',
    userId: 1,
    developerId: 1,
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addReservation(state));
    setState({
      name: '',
      reservationDate: '',
      city: '',
      userId: 1,
      developerId: 1,
    });
  };

  return (
    <>
      <h2>ADD RESERVATION</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={state.name}
          onChange={handle}
          type="text"
          placeholder="Reservation name"
        />
        <input
          name="reservationDate"
          value={state.reservationDate}
          onChange={handle}
          type="text"
          placeholder="Reservation date"
        />
        <input
          name="city"
          value={state.city}
          onChange={handle}
          type="text"
          placeholder="City"
        />
        <button
          type="button"
          onClick={() => dispatch(handleSubmit)}
        >
          ADD RESERVATION
        </button>
      </form>
    </>
  );
};
export default AddReservations;
