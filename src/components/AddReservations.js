import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/addReservations';

const AddReservations = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    reservation_date: '',
    city: '',
    user_id: 1,
    developer_id: 1,
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
      reservation_date: '',
      city: '',
      user_id: 1,
      developer_id: 1,
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
          name="reservation_date"
          value={state.reservation_date}
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
