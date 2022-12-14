import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addReservation } from '../store/reservations/addReservations';
import styles from './AddReservations.module.css';

const AddReservations = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    reservationDate: '',
    city: '',
    developerId: id,
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    dispatch(addReservation(state));
    setState({
      name: '',
      reservationDate: '',
      city: '',
      userId: 1,
      developerId: id,
    });
    e.preventDefault();

    navigate('/reservations');
  };

  return (
    <div className={styles.page}>
      <div className={styles.page1}>
        <h5 className={styles.header}>BOOK A RESERVATION WITH A DEVELOPER</h5>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={state.name}
            onChange={handle}
            type="text"
            placeholder="Reservation name"
            className={`${styles.formEl} ${styles.formEl1}`}
          />
          <input
            name="reservationDate"
            value={state.reservationDate}
            onChange={handle}
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            placeholder="Date"
            className={`${styles.formEl} ${styles.formEl1}`}
          />
          <input
            name="city"
            value={state.city}
            onChange={handle}
            type="text"
            placeholder="City"
            className={`${styles.formEl} ${styles.formEl1}`}
          />
          <button
            type="submit"
            className={`${styles.formEl} ${styles.formEl2}`}
          >
            Add Reservation
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddReservations;
