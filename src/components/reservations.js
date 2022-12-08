import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../store/reservations/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convertDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  };

  // console.log(reservations);
  return (
  // list of reservations
    <div>
      <h1>Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <h2>{reservation.name}</h2>
            <p>{reservation.city}</p>
            <p>{convertDate(reservation.reservation_date)}</p>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Reservations;
